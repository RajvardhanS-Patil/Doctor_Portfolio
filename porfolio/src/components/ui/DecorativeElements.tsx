"use client";

import { motion } from "framer-motion";

export const EcgLine = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`w-full h-auto opacity-10 ${className}`} 
    viewBox="0 0 1000 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M0 50H200L230 20L270 90L310 10L350 80L380 50H1000"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </svg>
);

export const DotGrid = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`w-full h-full opacity-5 ${className}`} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotGrid)" />
  </svg>
);

export const MedicalCrossPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`w-full h-full opacity-[0.02] ${className}`} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="medicalCross" width="80" height="80" patternUnits="userSpaceOnUse">
        <path d="M38 30h4v8h8v4h-8v8h-4v-8h-8v-4h8v-8z" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#medicalCross)" />
  </svg>
);

export const CurvedSeparator = ({ className = "", fill = "currentColor" }: { className?: string, fill?: string }) => (
  <svg 
    className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ${className}`}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none"
  >
    <path 
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.59,32.41,154.26,87.69,321.39,56.44Z" 
      fill={fill}
    ></path>
  </svg>
);
