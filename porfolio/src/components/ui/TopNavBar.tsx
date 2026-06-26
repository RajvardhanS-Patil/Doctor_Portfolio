"use client";

import { motion } from "framer-motion";

export default function TopNavBar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline/5"
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
        <div className="font-headline-sm text-primary tracking-tight font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-sans font-medium tracking-wider">HP</span>
          </div>
          <span className="hidden sm:inline">DR. HARSHVARDHAN S. PATIL</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          {["Bio", "Journey", "Expertise", "Gallery"].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase() === 'bio' ? 'about' : item.toLowerCase() === 'journey' ? 'experience' : item.toLowerCase()}`}
              className="group relative font-label-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="ml-4 px-8 py-3 bg-secondary text-white rounded-full font-label-lg uppercase tracking-widest hover:bg-secondary/90 transition-colors shadow-[0_8px_20px_rgba(44,105,78,0.2)]"
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
