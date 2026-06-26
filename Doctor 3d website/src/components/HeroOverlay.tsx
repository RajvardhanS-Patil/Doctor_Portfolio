"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

interface HeroOverlayProps {
  scrollProgress: MotionValue<number>;
}

export default function HeroOverlay({ scrollProgress }: HeroOverlayProps) {
  // ── Frame 1: Doctor Name + Title ─────────────────────────────
  const titleOpacity = useTransform(scrollProgress, [0, 0.12, 0.22], [1, 1, 0]);
  const titleY = useTransform(scrollProgress, [0, 0.22], [0, -60]);
  const titleScale = useTransform(scrollProgress, [0, 0.22], [1, 0.97]);
  // Hide when fully transparent to prevent stacking
  const titleVisibility = useTransform(titleOpacity, (v) => (v > 0.01 ? "visible" : "hidden"));

  // ── Frame 2: Mission / Philosophy ────────────────────────────
  const subOpacity = useTransform(scrollProgress, [0, 0.17, 0.28, 0.45, 0.56], [0, 0, 1, 1, 0]);
  const subY = useTransform(scrollProgress, [0.17, 0.56], [30, -20]);
  const subScale = useTransform(scrollProgress, [0.17, 0.28, 0.45, 0.56], [0.98, 1, 1, 0.98]);
  const subVisibility = useTransform(subOpacity, (v) => (v > 0.01 ? "visible" : "hidden"));

  // ── Frame 3: Credentials + CTA ──────────────────────────────
  const credOpacity = useTransform(scrollProgress, [0, 0.54, 0.65, 0.80, 0.92], [0, 0, 1, 1, 0]);
  const credY = useTransform(scrollProgress, [0.54, 0.92], [30, -20]);
  const credScale = useTransform(scrollProgress, [0.54, 0.65, 0.80, 0.92], [0.98, 1, 1, 0.98]);
  const credVisibility = useTransform(credOpacity, (v) => (v > 0.01 ? "visible" : "hidden"));

  // ── UI elements ──────────────────────────────────────────────
  const uiOpacity = useTransform(scrollProgress, [0, 0.08], [1, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-5 pt-6 pb-6 sm:p-8 md:p-16 lg:p-24 z-10">


      {/* ─── Center Content: Stacked text frames ─── */}
      <div className="relative flex-1 flex items-center h-full max-w-4xl">
        <div className="relative w-full">

          {/* Frame 1 — Doctor's Name + Role */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY, scale: titleScale, visibility: titleVisibility }}
            className="absolute left-0 top-1/2 -translate-y-1/2 will-change-transform w-full pr-4 sm:pr-0"
          >
            <p className="font-label-caps text-[10px] sm:text-label-caps text-primary tracking-widest mb-3 sm:mb-4">
              M.B.B.S. &bull; FMGE Qualified &bull; MMC Registered
            </p>
            <h1 className="text-[32px] sm:text-[44px] md:text-[64px] lg:text-[80px] font-display-lg text-on-surface mb-3 sm:mb-4 leading-[1.1] tracking-tighter drop-shadow-lg">
              Dr. Harshvardhan<br />
              <span className="text-primary drop-shadow-md">Suresh Patil</span>
            </h1>
            <p className="font-body-lg text-[14px] sm:text-body-lg text-white max-w-sm sm:max-w-md mt-4 sm:mt-6 leading-relaxed tracking-wide drop-shadow-md font-medium">
              Hospital Medical Officer &amp; Telemedicine Physician — delivering compassionate, evidence-based healthcare.
            </p>
          </motion.div>

          {/* Frame 2 — Mission Statement + CV Download */}
          <motion.div
            initial={{ opacity: 0, visibility: "hidden" }}
            style={{ opacity: subOpacity, y: subY, scale: subScale, visibility: subVisibility }}
            className="absolute left-0 top-1/2 -translate-y-1/2 will-change-transform w-full pr-4 sm:pr-0"
          >
            <h2 className="text-[24px] sm:text-3xl md:text-[48px] lg:text-display-lg font-display-lg text-on-surface mb-5 sm:mb-8 leading-tight max-w-3xl tracking-tighter drop-shadow-lg">
              Precision diagnostics &amp; empathetic care across <span className="text-secondary drop-shadow-md">emergency, OPD &amp; telemedicine.</span>
            </h2>
            <p className="font-body-md text-[13px] sm:text-body-md text-white max-w-lg mb-6 sm:mb-8 leading-relaxed drop-shadow-md font-medium">
              Trained at Sir H. N. Reliance Foundation Hospital, Mumbai — one of India&apos;s premier tertiary-care institutions.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pointer-events-auto">
              <a href="/Dr_Harshvardhan_Patil_CV.pdf" download className="flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-5 py-2.5 rounded-full font-label-caps text-[10px] sm:text-label-caps tracking-widest hover:bg-primary/20 transition-all group">
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a href="#experience" className="flex items-center gap-2 text-primary font-label-caps text-[10px] sm:text-label-caps tracking-widest hover:text-primary-fixed transition-colors group">
                View Experience
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Frame 3 — Key Stats + Explore */}
          <motion.div
            initial={{ opacity: 0, visibility: "hidden" }}
            style={{ opacity: credOpacity, y: credY, scale: credScale, visibility: credVisibility }}
            className="absolute left-0 top-1/2 -translate-y-1/2 will-change-transform w-full pr-4 sm:pr-0"
          >
            <p className="font-label-caps text-[10px] sm:text-label-caps text-secondary tracking-widest mb-3 sm:mb-4">
              Clinical Expertise
            </p>
            <h2 className="text-[24px] sm:text-3xl md:text-[48px] lg:text-display-lg font-display-lg text-on-surface mb-6 sm:mb-8 leading-tight max-w-3xl tracking-tighter drop-shadow-lg">
              Dedicated to <span className="text-tertiary drop-shadow-md">patient-centered</span> outcomes.
            </h2>

            {/* Quick stats — mobile-friendly grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-lg pointer-events-auto">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 hover:border-primary/50 hover:bg-black/60 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-3 sm:p-4 shadow-lg group cursor-pointer">
                <p className="text-xl sm:text-2xl font-display-lg text-primary drop-shadow-md group-hover:scale-105 transition-transform origin-left">200+</p>
                <p className="text-[10px] sm:text-xs text-white/90 font-label-caps tracking-wider mt-1 drop-shadow-md">Daily OPD</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/20 hover:border-secondary/50 hover:bg-black/60 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-3 sm:p-4 shadow-lg group cursor-pointer">
                <p className="text-xl sm:text-2xl font-display-lg text-secondary drop-shadow-md group-hover:scale-105 transition-transform origin-left">FMGE</p>
                <p className="text-[10px] sm:text-xs text-white/90 font-label-caps tracking-wider mt-1 drop-shadow-md">1st Attempt</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/20 hover:border-tertiary/50 hover:bg-black/60 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-3 sm:p-4 col-span-2 sm:col-span-1 shadow-lg group cursor-pointer">
                <p className="text-xl sm:text-2xl font-display-lg text-tertiary drop-shadow-md group-hover:scale-105 transition-transform origin-left">5+</p>
                <p className="text-[10px] sm:text-xs text-white/90 font-label-caps tracking-wider mt-1 drop-shadow-md">Rotations</p>
              </div>
            </div>

            <div className="flex items-center gap-6 pointer-events-auto">
              <a href="#about" className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white font-label-caps text-[10px] sm:text-label-caps tracking-widest hover:bg-black/60 hover:text-primary transition-all group shadow-lg hover:shadow-xl hover:-translate-y-1">
                Explore More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        style={{ opacity: uiOpacity }}
        className="w-full flex justify-center pb-2 sm:pb-8"
      >
        <div className="flex flex-col items-center gap-3 sm:gap-4 opacity-70">
          <span className="font-label-caps text-[8px] sm:text-[10px] tracking-widest uppercase text-on-surface-variant">Scroll to Explore</span>
          <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[scroll_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </motion.div>

    </div>
  );
}
