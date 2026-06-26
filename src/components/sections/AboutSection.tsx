"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-[120px] md:py-[160px] px-margin-mobile sm:px-margin-desktop max-w-container-max mx-auto w-full" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-20"
      >
        <span className="font-label-caps text-label-caps text-primary mb-4 block">About Dr. Patil</span>
        <h2 className="font-headline-md text-2xl sm:text-headline-md text-on-surface">A Commitment to Clinical Excellence</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-bento-gap">
        {/* Philosophy - Large Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-8 glass-card p-6 sm:p-10 rounded-2xl sm:rounded-[32px] flex flex-col justify-between min-h-[350px] sm:h-[500px]"
        >
          <div>
            <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-4 sm:mb-6 block">psychology</span>
            <h3 className="font-headline-md text-xl sm:text-headline-md text-on-surface mb-4 sm:mb-6">Advancing Patient Care Through Precision</h3>
            <p className="font-body-lg text-[14px] sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              As a dedicated physician with extensive experience across high-pressure environments—from casualty wards to telemedicine—I believe in an evidence-based approach to medicine. My clinical philosophy centers on delivering accurate diagnostics, comprehensive emergency care, and empathetic patient communication. Every decision is driven by a commitment to improving long-term patient outcomes.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-8 sm:mt-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-sm">verified</span>
            </div>
            <span className="font-label-caps text-[10px] sm:text-label-caps text-on-surface-variant tracking-widest">FMGE Qualified • First Attempt</span>
          </div>
        </motion.div>

        {/* Image Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-4 h-[300px] sm:h-[500px] rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/5 relative group"
        >
          <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-[32px] shadow-[inset_0_0_40px_rgba(173,206,193,0.05)] z-10" />
          <img 
            src="/pic_doctor/pic_3.jpeg"
            alt="Dr. Harshvardhan Patil"
            className="w-full h-full object-cover object-[center_15%] grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" 
          />
        </motion.div>
      </div>
    </section>
  );
}
