"use client";

import { motion } from "framer-motion";
import { CurvedSeparator } from "@/components/ui/DecorativeElements";

export default function QualificationsSection() {
  const education = [
    {
      degree: "MBBS",
      institution: "Smolensk State Medical University, Russia",
      year: "2024",
      icon: "school",
      highlight: false
    },
    {
      degree: "FMGE Qualified",
      institution: "National Board of Examinations, India",
      year: "First Attempt",
      icon: "verified",
      highlight: true
    },
    {
      degree: "MMC Registration",
      institution: "Maharashtra Medical Council",
      year: "MMC20250037528",
      icon: "badge",
      highlight: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-surface-container overflow-hidden" id="education">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="font-label-lg text-secondary uppercase tracking-widest mb-4 block">Academic Foundation</span>
          <h2 className="font-headline-lg text-primary">Education & Certifications</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden
                ${edu.highlight 
                  ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary border border-primary-container/50' 
                  : 'bg-surface-container-lowest border border-outline/10'}`}
            >
              {edu.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              )}
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm
                ${edu.highlight ? 'bg-secondary/20 text-secondary-fixed' : 'bg-primary/5 text-secondary'}`}>
                <span className="material-symbols-outlined text-3xl">
                  {edu.icon}
                </span>
              </div>
              
              <h3 className={`font-headline-sm mb-3 ${edu.highlight ? 'text-white' : 'text-primary'}`}>
                {edu.degree}
              </h3>
              
              <p className={`font-body-md mb-6 leading-relaxed ${edu.highlight ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
                {edu.institution}
              </p>
              
              <div className={`mt-auto px-5 py-2 font-label-lg rounded-full flex items-center gap-2
                ${edu.highlight ? 'bg-secondary text-white' : 'bg-secondary/10 text-secondary'}`}>
                {edu.highlight && <span className="material-symbols-outlined text-sm">verified</span>}
                {edu.year}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CurvedSeparator className="-mb-1" fill="var(--color-background)" />
    </section>
  );
}
