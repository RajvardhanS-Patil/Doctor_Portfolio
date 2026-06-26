"use client";

import { motion } from "framer-motion";
import { CurvedSeparator, DotGrid } from "@/components/ui/DecorativeElements";

export default function ExpertiseSection() {
  const specializations = [
    {
      icon: "emergency",
      title: "Emergency & Casualty",
      desc: "Delivering acute case management and rapid interventions. Proficient in basic emergency care, casualty triaging, and stabilizing critical patients in high-pressure clinical environments."
    },
    {
      icon: "monitor_heart",
      title: "OPD Management",
      desc: "Expertise in outpatient department operations. Skilled in conducting thorough patient assessments, diagnosing common medical conditions, and formulating effective long-term treatment plans."
    },
    {
      icon: "video_camera_front",
      title: "Telemedicine & Remote Care",
      desc: "Providing modern, remote patient consultations. Experienced in clinical assessment, counseling, and follow-up care utilizing digital healthcare platforms to extend medical access."
    },
    {
      icon: "vaccines",
      title: "Ward Procedures",
      desc: "Competent in essential clinical procedures including IV line insertion, IM/IV injections, wound care, minor dressings, and consistent patient monitoring and evaluation."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-transparent overflow-hidden" id="expertise">
      <div className="absolute inset-0 pointer-events-none">
        <DotGrid className="text-primary/10" />
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="font-label-lg text-secondary uppercase tracking-widest mb-4 block">Core Competencies</span>
          <h2 className="font-headline-lg text-primary">Focused Clinical Expertise</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specializations.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="group liquid-glass p-8 rounded-[32px] cursor-default z-10"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white text-secondary transition-colors duration-500 shadow-sm relative z-10">
                <span className="material-symbols-outlined text-3xl transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-sm mb-4 text-primary relative z-10">{item.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <CurvedSeparator className="-mb-1" fill="var(--color-surface-container)" />
    </section>
  );
}
