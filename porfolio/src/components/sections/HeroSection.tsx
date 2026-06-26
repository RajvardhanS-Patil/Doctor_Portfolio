"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { DotGrid, EcgLine } from "@/components/ui/DecorativeElements";
import HeroScrollBg from "@/components/ui/HeroScrollBg";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative lg:h-[250vh] bg-background w-full" id="hero">
      {/* Sticky Container for the pinned content and animation */}
      <div className="relative lg:sticky top-0 left-0 w-full min-h-[100dvh] lg:h-[100dvh] overflow-hidden flex items-start lg:items-center pt-28 md:pt-32 pb-12 md:pb-16 lg:pb-24">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <DotGrid className="text-primary/20" />
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none z-0" />
        
        <div className="absolute top-[20%] left-0 w-full overflow-hidden pointer-events-none z-0">
          <EcgLine className="text-secondary/20" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 z-20 flex flex-col justify-center relative order-2 lg:order-1"
        >
          {/* Background Animation tied to scrollYProgress, now trapped inside the text box */}
          <div className="absolute inset-[-40px] md:inset-[-80px] pointer-events-none z-[-1]">
            <HeroScrollBg scrollYProgress={scrollYProgress} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-lg uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Hospital Medical Officer
            </span>
          </motion.div>

          <h1 className="font-display-lg-mobile md:text-[56px] lg:text-[64px] font-display-lg mb-6 text-primary leading-[1.1]">
            Dr. Harshvardhan Suresh Patil
          </h1>
          
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-[45ch] leading-relaxed">
            Motivated and clinically competent MBBS graduate with proven expertise in emergency care, telemedicine, and comprehensive patient assessment. Dedicated to delivering ethical, patient-centered care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#about" 
              className="px-8 py-4 bg-primary text-on-primary rounded-xl font-label-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined">person</span>
              View Profile
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/Dr_Harshvardhan_Patil_CV.pdf" 
              download 
              className="px-8 py-4 bg-surface-container-lowest text-primary rounded-xl font-label-lg flex items-center justify-center gap-2 hover:bg-surface-dim transition-colors border border-outline/20 shadow-sm"
            >
              <span className="material-symbols-outlined">download</span>
              Download CV
            </motion.a>
          </div>

          {/* Contact Quick Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a className="group flex items-center gap-2 text-on-surface-variant font-label-md hover:text-primary transition-colors" href="mailto:harshvardhanpatil619@gmail.com">
              <span className="material-symbols-outlined text-xl group-hover:text-secondary transition-colors">mail</span>
              harshvardhanpatil619@gmail.com
            </a>
            <a className="group flex items-center gap-2 text-on-surface-variant font-label-md hover:text-primary transition-colors" href="tel:+918421737833">
              <span className="material-symbols-outlined text-xl group-hover:text-secondary transition-colors">call</span>
              +91 8421737833
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image with Blending and Organic Mask */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 relative flex justify-center lg:justify-end z-10 w-full h-full min-h-[350px] md:min-h-[450px] lg:min-h-[600px] order-1 lg:order-2"
        >
          {/* Common Wrapper for Image and Floating Badge */}
          <div className="relative w-full max-w-[85%] sm:max-w-[600px] group cursor-pointer mx-auto">
            <div className="liquid-glass relative w-full h-full aspect-square sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[32px] sm:rounded-[40px] rounded-tr-[80px] sm:rounded-tr-[120px] rounded-bl-[80px] sm:rounded-bl-[120px] shadow-2xl bg-surface-container z-10">
              {/* Soft Ambient Shadow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-primary/5 mix-blend-overlay" />
              
              {/* The image is blended using multiply to hide white backgrounds and soft gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30 z-10 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/5 to-transparent z-10 pointer-events-none group-hover:opacity-70 transition-opacity duration-1000" />
              
              <Image 
                src="/images/hero-doctor.jpeg" 
                alt="Dr. Harshvardhan Patil"
                fill
                className="object-cover object-[center_15%] mix-blend-multiply filter contrast-[1.05] brightness-[1.05] group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
            
            {/* Floating Badge - moved outside overflow-hidden to prevent clipping, and shifted UP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-6 md:bottom-28 left-4 md:-left-12 bg-white/95 backdrop-blur-xl p-4 md:p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,9,23,0.15)] border border-white/60 z-20 flex items-center gap-3 md:gap-4 hover:-translate-y-1 group-hover:scale-105 transition-all duration-700 max-w-[calc(100%-2rem)] md:max-w-none"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary text-xl md:text-2xl">verified</span>
              </div>
              <div>
                <div className="font-label-lg text-primary mb-0.5 md:mb-1 text-sm md:text-base">FMGE Qualified</div>
                <div className="font-label-md text-on-surface-variant capitalize text-xs md:text-sm">First Attempt Clearance</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}
