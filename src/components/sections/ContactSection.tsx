"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-[160px] px-margin-mobile sm:px-margin-desktop bg-surface-container-low" id="contact">
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
        
        {/* Left Col - Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-label-caps text-label-caps text-primary mb-4 block">Connect</span>
          <h2 className="font-display-lg text-[36px] sm:text-[50px] md:text-[60px] text-on-surface mb-6 sm:mb-8 leading-tight tracking-tighter">
            Start a <span className="text-secondary">conversation.</span>
          </h2>
          <p className="font-body-lg text-[14px] sm:text-body-lg text-on-surface-variant max-w-md mb-8 sm:mb-12 leading-relaxed">
            Currently exploring hospital clinical roles and advancing telemedicine access across Maharashtra.
          </p>
          
          <div className="space-y-5 sm:space-y-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">phone</span>
              </div>
              <div className="min-w-0">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">Phone / WhatsApp</span>
                <a href="tel:+918421737833" className="font-headline-md text-base sm:text-xl text-on-surface hover:text-primary transition-colors">+91 8421737833</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">mail</span>
              </div>
              <div className="min-w-0">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">Email</span>
                <a href="mailto:harshvardhanpatil619@gmail.com" className="font-headline-md text-sm sm:text-xl text-on-surface hover:text-primary transition-colors break-all sm:break-normal">harshvardhanpatil619@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">location_on</span>
              </div>
              <div>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">Location</span>
                <span className="font-headline-md text-base sm:text-xl text-on-surface">Maharashtra, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col - CTA & Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 sm:p-12 rounded-2xl sm:rounded-[32px] flex flex-col justify-center items-center text-center border border-white/5 hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform duration-500 relative group"
        >
          <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-[32px] shadow-[inset_0_0_40px_rgba(173,206,193,0.03)] z-10" />
          <span className="material-symbols-outlined text-primary text-5xl sm:text-6xl mb-6 sm:mb-8 block relative z-20 group-hover:scale-110 transition-transform duration-500">stethoscope</span>
          <h3 className="font-headline-md text-2xl sm:text-3xl text-on-surface mb-4 sm:mb-6 relative z-20">Review Full Credentials</h3>
          <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant mb-8 sm:mb-10 max-w-sm relative z-20">
            Download my comprehensive Curriculum Vitae including academic history, clinical rotations, FMGE qualification, and full MMC registration details.
          </p>
          
          <a href="/Dr_Harshvardhan_Patil_CV.pdf" download className="relative z-20 w-full bg-primary hover:-translate-y-1 active:scale-95 text-on-primary py-3.5 sm:py-4 rounded-full font-label-caps text-[10px] sm:text-label-caps transition-all duration-300 shadow-[0_0_30px_rgba(173,206,193,0.1)] hover:shadow-[0_0_40px_rgba(173,206,193,0.3)] flex items-center justify-center gap-2">
            Download CV
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">download</span>
          </a>
        </motion.div>
      </div>

      <div className="max-w-container-max mx-auto w-full mt-16 sm:mt-[120px] pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-label-caps text-[10px] sm:text-[12px] text-on-surface-variant text-center sm:text-left">
          &copy; {new Date().getFullYear()} Dr. Harshvardhan Suresh Patil. All rights reserved.
        </p>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="font-label-caps text-[10px] sm:text-[12px] text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="font-label-caps text-[10px] sm:text-[12px] text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </section>
  );
}
