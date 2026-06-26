"use client";

import { motion } from "framer-motion";
import { MedicalCrossPattern } from "@/components/ui/DecorativeElements";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Hospital Medical Officer (HMO)",
      org: "Sir H. N. Reliance Foundation Hospital, Mumbai",
      date: "Recent",
      desc: "Served in one of India's leading tertiary-care and multi-specialty hospitals. Assessed OPD patients, managed casualty and emergency cases, and delivered fundamental emergency care in a fast-paced environment.",
      icon: "local_hospital"
    },
    {
      role: "Telemedicine Physician",
      org: "Remote Patient Management",
      date: "Concurrent",
      desc: "Provided remote patient consultations, clinical assessment, counseling, and follow-up care. Gained extensive exposure to clinical decision-making and effectively diagnosed common medical conditions.",
      icon: "video_camera_front"
    },
    {
      role: "Medical Internship",
      org: "Civil Hospital, Jalna (incl. Russia Rotations)",
      date: "Pre-2024",
      desc: "Managed OPD of 200+ patients in General Medicine. Performed ward procedures (IV/IM, wound care), delivered emergency care, and conducted regular patient monitoring across major clinical rotations.",
      icon: "medical_services"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-surface-container/80 backdrop-blur-2xl relative overflow-hidden" id="experience">
      <div className="absolute inset-0 pointer-events-none">
        <MedicalCrossPattern className="text-secondary" />
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-label-lg text-secondary uppercase tracking-widest mb-2 block">Professional Journey</span>
          <h2 className="font-headline-lg text-primary">Clinical Experience</h2>
        </motion.div>

        {/* Timeline Line (Desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pt-12 md:pt-0"
        >
          {/* Connector Line */}
          <div className="hidden md:block absolute left-0 top-[60px] w-full h-[1px] bg-gradient-to-r from-transparent via-outline/30 to-transparent z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="relative z-10 flex flex-col md:items-center text-left md:text-center group"
              >
                {/* Icon Node */}
                <div className="w-[120px] h-[120px] rounded-[40px] flex items-center justify-center mb-8 md:mb-12 z-10 md:mt-0 relative liquid-glass">
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-500" />
                  <span className="material-symbols-outlined text-secondary text-[40px] group-hover:scale-110 transition-transform duration-500 relative z-10">
                    {exp.icon}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="font-headline-sm font-bold text-primary mb-3 max-w-[250px]">{exp.role}</h3>
                <p className="font-label-lg text-secondary mb-5 tracking-wide">{exp.org}</p>
                <p className="font-body-md text-on-surface-variant leading-relaxed max-w-[40ch]">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
