"use client";

import { motion } from "framer-motion";
import { DotGrid } from "@/components/ui/DecorativeElements";

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-on-primary relative overflow-hidden" id="contact">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <DotGrid className="text-white" />
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/15 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <span className="font-label-lg text-secondary-fixed uppercase tracking-widest mb-6 block">Get In Touch</span>
            <h2 className="font-display-lg-mobile md:text-[56px] font-headline-lg text-white mb-8 leading-[1.1]">
              Dedicated to Your Health & Well-being
            </h2>
            <p className="font-body-lg text-on-primary/70 mb-12 max-w-[45ch] leading-relaxed">
              Whether you need an expert consultation or have questions regarding patient care, I am always ready to provide comprehensive and ethical medical support.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/Dr_Harshvardhan_Patil_CV.pdf" 
              download 
              className="inline-flex px-10 py-5 bg-secondary text-white rounded-full font-label-lg items-center gap-3 hover:bg-secondary/90 transition-all shadow-[0_10px_30px_rgba(44,105,78,0.3)]"
            >
              <span className="material-symbols-outlined">download</span>
              Download Full CV
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 md:p-14 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="space-y-10 relative z-10">
              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 transition-transform">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0 border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl">mail</span>
                </div>
                <div>
                  <div className="font-label-lg text-white/50 mb-2 tracking-widest">EMAIL</div>
                  <a href="mailto:harshvardhanpatil619@gmail.com" className="font-headline-sm text-white hover:text-secondary-fixed transition-colors block break-all">
                    harshvardhanpatil619@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 transition-transform">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0 border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl">call</span>
                </div>
                <div>
                  <div className="font-label-lg text-white/50 mb-2 tracking-widest">PHONE / WHATSAPP</div>
                  <a href="tel:+918421737833" className="font-headline-sm text-white hover:text-secondary-fixed transition-colors">
                    +91 8421737833
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 transition-transform">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0 border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary-fixed text-3xl">location_on</span>
                </div>
                <div>
                  <div className="font-label-lg text-white/50 mb-2 tracking-widest">LOCATION</div>
                  <div className="font-headline-sm text-white">
                    Maharashtra, India
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline-sm text-white font-bold tracking-tight">
            DR. HARSHVARDHAN S. PATIL
          </div>
          <div className="font-body-md text-white/50 flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
