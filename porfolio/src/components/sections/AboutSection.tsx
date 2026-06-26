"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { DotGrid, MedicalCrossPattern } from "@/components/ui/DecorativeElements";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden" id="about">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <MedicalCrossPattern className="text-secondary" />
      </div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left: Portrait & Badges */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Organic Shape Container */}
          <div className="group liquid-glass rounded-[40px] rounded-tl-[120px] rounded-br-[120px] overflow-hidden bg-surface-container aspect-[3/4] max-w-md mx-auto lg:mx-0 shadow-2xl relative border border-outline/10 z-10">
             <Image 
                src="/images/doctor-profile.jpeg" 
                alt="Dr. Harshvardhan Patil"
                fill
                className="object-cover object-[center_top] filter contrast-[1.02] brightness-[1.02] group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
          </div>
          
          {/* Floating Action Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute z-20 -bottom-8 md:-bottom-6 right-4 md:-right-8 bg-surface-container-lowest/90 backdrop-blur-xl text-primary p-4 md:p-6 rounded-[24px] md:rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[240px] md:max-w-[280px] border border-outline/10 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-lg md:text-xl">health_and_safety</span>
              </div>
              <div className="font-label-lg font-bold text-primary tracking-widest uppercase mt-1 md:mt-2 text-xs md:text-sm">Ethical Care</div>
            </div>
            <div className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
              Committed to patient-first protocols and precise clinical decision-making.
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <span className="font-label-lg text-secondary uppercase tracking-widest mb-4 block">About Me</span>
          <h2 className="font-display-lg-mobile md:text-[40px] font-headline-lg text-primary mb-8 leading-tight max-w-[20ch]">
            Driven by Clinical Excellence, Guided by Compassion
          </h2>
          
          <div className="font-body-lg text-on-surface-variant space-y-6 mb-12 max-w-[60ch] leading-relaxed">
            <p>
              Dr. Harshvardhan Suresh Patil is a highly motivated and clinically competent physician dedicated to delivering exceptional patient care. A graduate of <strong className="text-primary font-medium">Smolensk State Medical University</strong> with successful first-attempt clearance of the FMGE, he brings a robust academic foundation paired with rigorous hands-on clinical experience.
            </p>
            <p>
              Having served as a Hospital Medical Officer at <strong className="text-primary font-medium">Sir H. N. Reliance Foundation Hospital</strong>—one of India’s premier multi-specialty tertiary-care centers—he has honed his skills in comprehensive patient assessment, casualty management, and emergency interventions. 
            </p>
            <p>
              His practice philosophy centers on precise, ethical, and evidence-based medicine, ensuring every patient receives dedicated and holistic care, whether in-person or via modern telemedicine platforms.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[60ch]">
            <div className="group flex items-center gap-4 p-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-md cursor-default">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-secondary text-2xl group-hover:scale-110 transition-transform">person_check</span>
              </div>
              <div className="font-label-lg text-primary tracking-wider">Patient Focused</div>
            </div>
            
            <div className="group flex items-center gap-4 p-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-md cursor-default">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-secondary text-2xl group-hover:scale-110 transition-transform">verified_user</span>
              </div>
              <div className="font-label-lg text-primary tracking-wider">Clinical Precision</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
