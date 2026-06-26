"use client";

import { motion } from "framer-motion";

export default function GallerySection() {
  return (
    <section className="py-20 sm:py-[120px] px-margin-mobile sm:px-margin-desktop max-w-container-max mx-auto w-full" id="gallery">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-16 text-center"
      >
        <span className="font-label-caps text-label-caps text-secondary mb-4 block">In Action</span>
        <h2 className="font-headline-md text-2xl sm:text-headline-md text-on-surface">Professional Highlights</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-bento-gap">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="h-[280px] sm:h-[400px] md:h-[600px] rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/5 relative group cursor-pointer"
        >
          <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-[32px] shadow-[inset_0_0_40px_rgba(173,206,193,0.05)] z-10" />
          <img 
            src="/pic_doctor/pic_2.jpeg"
            alt="Dr. Harshvardhan Patil - Professional"
            className="w-full h-full object-cover object-[center_25%] grayscale-[10%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-[280px] sm:h-[400px] md:h-[600px] rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/5 relative group cursor-pointer"
        >
          <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-[32px] shadow-[inset_0_0_40px_rgba(173,206,193,0.05)] z-10" />
          <img 
            src="/pic_doctor/pic_4.jpeg"
            alt="Dr. Harshvardhan Patil - Stethoscope"
            className="w-full h-full object-cover object-[center_10%] grayscale-[10%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" 
          />
        </motion.div>
      </div>
    </section>
  );
}
