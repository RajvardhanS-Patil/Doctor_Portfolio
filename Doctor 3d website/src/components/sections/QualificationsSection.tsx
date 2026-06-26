"use client";

import { motion } from "framer-motion";

export default function QualificationsSection() {
  return (
    <section className="py-20 sm:py-[120px] px-margin-mobile sm:px-margin-desktop max-w-container-max mx-auto w-full" id="credentials">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-16"
      >
        <span className="font-label-caps text-label-caps text-primary mb-4 block">Official Recognition</span>
        <h2 className="font-headline-md text-2xl sm:text-headline-md text-on-surface">Credentials &amp; Certifications</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-bento-gap">
        
        {/* Education Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 glass-card p-6 sm:p-10 rounded-2xl sm:rounded-[32px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500"
        >
          <div>
            <span className="material-symbols-outlined text-secondary text-3xl sm:text-4xl mb-4 sm:mb-6 block">school</span>
            <h3 className="font-headline-md text-xl sm:text-headline-md text-on-surface mb-6 sm:mb-8">Academic Pedigree</h3>
            <ul className="space-y-6">
              <li className="border-b border-white/5 pb-6">
                <p className="font-label-caps text-[12px] sm:text-[14px] text-primary mb-2 leading-tight">Bachelor of Medicine, Bachelor of Surgery (MBBS)</p>
                <p className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant">Smolensk State Medical University, Russia</p>
                <p className="font-label-caps text-[10px] text-on-surface-variant mt-2 tracking-widest uppercase">Class of 2024</p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-7 glass-card p-6 sm:p-10 rounded-2xl sm:rounded-[32px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500"
        >
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-4 sm:mb-6 block">military_tech</span>
              <h3 className="font-headline-md text-xl sm:text-headline-md text-on-surface">Licensure &amp; Examinations</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-surface-container-low p-4 sm:p-6 rounded-xl sm:rounded-[20px] border border-white/5 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-secondary mb-3 sm:mb-4 block">assignment_turned_in</span>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface">FMGE Qualified</p>
              <p className="font-label-caps text-[10px] text-primary mt-2 tracking-widest uppercase">Cleared in First Attempt</p>
            </div>
            
            <div className="bg-surface-container-low p-4 sm:p-6 rounded-xl sm:rounded-[20px] border border-white/5 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-secondary mb-3 sm:mb-4 block">badge</span>
              <p className="font-body-lg text-[15px] sm:text-body-lg text-on-surface">Medical Council Registration</p>
              <p className="font-label-caps text-[10px] text-primary mt-2 tracking-widest uppercase">MMC20250037528</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
