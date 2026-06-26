"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 240;

const getCurrentFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/bg_animate/frame_${paddedIndex}_delay-0.042s.webp`;
};

interface HeroScrollBgProps {
  scrollYProgress: MotionValue<number>;
}

export default function HeroScrollBg({ scrollYProgress }: HeroScrollBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getCurrentFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (index: number) => {
    if (!imagesLoaded || !canvasRef.current || !images[index]) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    const { clientWidth, clientHeight } = canvas;
    if (canvas.width !== clientWidth || canvas.height !== clientHeight) {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const imgAspect = img.width / img.height;
    const canvasAspect = clientWidth / clientHeight;

    let renderWidth, renderHeight;

    // We want the logo to be contained entirely inside the container (object-contain logic)
    // so it perfectly fits exactly in the box without spilling over
    if (canvasAspect > imgAspect) {
      renderHeight = clientHeight;
      renderWidth = clientHeight * imgAspect;
    } else {
      renderWidth = clientWidth;
      renderHeight = clientWidth / imgAspect;
    }

    // Apply a slight zoom if we want it to fill a bit better
    const zoom = 1.0;
    renderWidth *= zoom;
    renderHeight *= zoom;

    const xOffset = (clientWidth / 2) - (renderWidth / 2);
    const yOffset = (clientHeight / 2) - (renderHeight / 2); // Center vertically

    ctx.clearRect(0, 0, clientWidth, clientHeight);
    ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
  };

  useEffect(() => {
    if (imagesLoaded) drawFrame(0);
  }, [imagesLoaded]);

  useEffect(() => {
    const handleResize = () => {
      const currentProgress = scrollYProgress.get();
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(currentProgress * FRAME_COUNT));
      drawFrame(frameIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded) return;
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-15 mix-blend-multiply filter contrast-125 grayscale"
      />
      {/* Light gradient overlay to preserve legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
