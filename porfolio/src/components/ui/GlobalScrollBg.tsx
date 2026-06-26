"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

const getCurrentFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/bg_animate/frame_${paddedIndex}_delay-0.042s.webp`;
};

export default function GlobalScrollBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Global scroll tracking
  const { scrollYProgress } = useScroll();

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
    const zoom = 1.05;

    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasAspect > imgAspect) {
      renderWidth = clientWidth * zoom;
      renderHeight = (clientWidth / imgAspect) * zoom;
    } else {
      renderWidth = (clientHeight * imgAspect) * zoom;
      renderHeight = clientHeight * zoom;
    }
    
    xOffset = (clientWidth - renderWidth) / 2;
    yOffset = (clientHeight - renderHeight) / 2;

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
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-background">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-15 mix-blend-multiply filter contrast-125 grayscale"
      />
      {/* Light gradient overlay to preserve legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background/60" />
    </div>
  );
}
