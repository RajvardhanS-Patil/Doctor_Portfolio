"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import HeroOverlay from "./HeroOverlay";

const FRAME_COUNT = 240;
const LERP_FACTOR = 0.12; // Smoothing factor — lower = smoother but laggier

const getCurrentFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/frames/frame_${paddedIndex}_delay-0.041s.webp`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Refs for animation state (avoid re-renders)
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0); // Smoothed (lerped) frame as a float
  const targetFrameRef = useRef(0);  // Raw target frame from scroll
  const rafIdRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Draw a frame on canvas with object-fit: cover logic
  const drawImage = useCallback(
    (ctx: CanvasRenderingContext2D, img: HTMLImageElement, clientWidth: number, clientHeight: number, alpha: number = 1) => {
      const imgAspect = img.width / img.height;
      const canvasAspect = clientWidth / clientHeight;
      const zoom = 1.08;

      let renderWidth, renderHeight;
      if (canvasAspect > imgAspect) {
        renderWidth = clientWidth * zoom;
        renderHeight = (clientWidth / imgAspect) * zoom;
      } else {
        renderWidth = clientHeight * imgAspect * zoom;
        renderHeight = clientHeight * zoom;
      }

      const xOffset = (clientWidth - renderWidth) / 2;
      // Use 0.15 instead of 0.5 to shift the framing upward, keeping the head in view
      const yOffset = (clientHeight - renderHeight) * 0.15;

      if (alpha < 1) ctx.globalAlpha = alpha;
      ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
      if (alpha < 1) ctx.globalAlpha = 1;
    },
    []
  );

  // Core render loop — lerps toward target frame and cross-fades between adjacent frames
  const renderLoop = useCallback(() => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Lerp toward target
    const current = currentFrameRef.current;
    const target = targetFrameRef.current;
    const diff = target - current;

    // Snap if close enough, otherwise lerp
    if (Math.abs(diff) < 0.05) {
      currentFrameRef.current = target;
    } else {
      currentFrameRef.current += diff * LERP_FACTOR;
    }

    const smoothFrame = currentFrameRef.current;
    const lowerIndex = Math.max(0, Math.min(FRAME_COUNT - 1, Math.floor(smoothFrame)));
    const upperIndex = Math.min(FRAME_COUNT - 1, lowerIndex + 1);
    const blend = smoothFrame - lowerIndex; // 0..1 fractional part

    // Ensure canvas buffer matches display size (retina-aware)
    const { clientWidth, clientHeight } = canvas;
    if (canvas.width !== clientWidth * (window.devicePixelRatio || 1) || canvas.height !== clientHeight * (window.devicePixelRatio || 1)) {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, clientWidth, clientHeight);

    const lowerImg = images[lowerIndex];
    const upperImg = images[upperIndex];

    if (lowerImg && lowerImg.complete && lowerImg.naturalWidth > 0) {
      // Draw base frame at full opacity
      drawImage(ctx, lowerImg, clientWidth, clientHeight, 1);

      // If blending, overlay the next frame with fractional alpha
      if (blend > 0.01 && upperImg && upperImg.complete && upperImg.naturalWidth > 0 && lowerIndex !== upperIndex) {
        drawImage(ctx, upperImg, clientWidth, clientHeight, blend);
      }
    }

    // Continue loop only while there's movement
    if (Math.abs(diff) > 0.05) {
      rafIdRef.current = requestAnimationFrame(renderLoop);
    } else {
      rafIdRef.current = null;
    }
  }, [drawImage]);

  // Kick the render loop (idempotent)
  const startRenderLoop = useCallback(() => {
    if (rafIdRef.current === null) {
      rafIdRef.current = requestAnimationFrame(renderLoop);
    }
  }, [renderLoop]);

  // Preload images with priority: first, last, and nearby frames load first
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;

    // Build load order: first frame, last frame, then fill in evenly
    const loadOrder: number[] = [];
    // Add first frame immediately for instant display
    loadOrder.push(0);
    // Add key frames spread across the sequence
    const keyFrameStep = Math.floor(FRAME_COUNT / 10);
    for (let i = keyFrameStep; i < FRAME_COUNT; i += keyFrameStep) {
      loadOrder.push(i);
    }
    loadOrder.push(FRAME_COUNT - 1);
    // Fill remaining
    for (let i = 0; i < FRAME_COUNT; i++) {
      if (!loadOrder.includes(i)) loadOrder.push(i);
    }

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.src = getCurrentFramePath(index);
        img.onload = () => {
          images[index] = img;
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

          // Show first frame as soon as it loads
          if (index === 0) {
            imagesRef.current = images;
            startRenderLoop();
          }

          if (loadedCount === FRAME_COUNT) {
            imagesRef.current = images;
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            imagesRef.current = images;
            setImagesLoaded(true);
          }
          resolve();
        };
      });
    };

    // Load in batches of 6 for fast parallel loading without overwhelming the browser
    let cancelled = false;
    (async () => {
      const batchSize = 6;
      for (let i = 0; i < loadOrder.length; i += batchSize) {
        if (cancelled) return;
        const batch = loadOrder.slice(i, i + batchSize);
        await Promise.all(batch.map(loadImage));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [startRenderLoop]);

  // Handle window resize — redraw at current frame
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // Reset canvas buffer so next render recalculates DPR scaling
      canvas.width = 0;
      canvas.height = 0;
      startRenderLoop();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [startRenderLoop]);

  // Scrub animation on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress to frame index (as a float for smooth interpolation)
    targetFrameRef.current = Math.min(FRAME_COUNT - 1, latest * (FRAME_COUNT - 1));
    startRenderLoop();
  });

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] bg-background w-full"
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Loading Progress */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-20 transition-opacity duration-700">
            <div className="relative w-16 h-16 mb-6">
              {/* Circular progress */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                <circle
                  cx="24" cy="24" r="20"
                  fill="none"
                  stroke="var(--color-surface-container-high)"
                  strokeWidth="2"
                />
                <circle
                  cx="24" cy="24" r="20"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - loadProgress / 100)}`}
                  style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-mono text-on-surface-variant">
                {loadProgress}%
              </span>
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
          style={{
            backgroundColor: "var(--background)",
          }}
        />

        {/* Hero Overlay synced with the same scroll progress */}
        <HeroOverlay scrollProgress={scrollYProgress} />
      </div>
    </section>
  );
}
