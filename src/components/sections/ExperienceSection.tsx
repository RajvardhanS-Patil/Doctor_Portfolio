"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    title: "Hospital Medical Officer (HMO)",
    company: "Sir H. N. Reliance Foundation Hospital and Research Centre, Mumbai",
    period: "2024 – Present",
    icon: "local_hospital",
    details: [
      "Serving at one of India's leading tertiary-care and multi-specialty hospitals.",
      "Assessing OPD patients, managing casualty and emergency cases.",
      "Delivering basic emergency care and clinical assessments.",
      "Coordinating with specialists for complex case management."
    ]
  },
  {
    title: "Telemedicine Physician",
    company: "Remote Patient Management",
    period: "2024 – Present",
    icon: "video_camera_front",
    details: [
      "Providing remote consultations, clinical assessment, counseling, and follow-up care.",
      "Extensive exposure to clinical decision-making and direct patient interaction.",
      "Diagnosing and handling common medical conditions via telemedicine platforms.",
      "Building patient trust through effective digital communication."
    ]
  },
  {
    title: "Medical Internship",
    company: "Civil Hospital, Jalna (Includes 1 year clinical rotations in Russia)",
    period: "2023 – 2024",
    icon: "stethoscope",
    details: [
      "Rotations: General Medicine, General Surgery, Pediatrics, OB/GYN, and Emergency.",
      "Managed an OPD of 200+ patients in General Medicine.",
      "Delivered emergency care and performed essential ward procedures (IV, IM, wound care).",
      "Gained hands-on experience in clinical diagnosis and patient management."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-20 sm:py-[120px] px-margin-mobile sm:px-margin-desktop max-w-container-max mx-auto w-full" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
        
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">Clinical Journey</span>
              <h2 className="font-headline-md text-2xl sm:text-headline-md text-on-surface mb-8 sm:mb-12">Career Highlights</h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[250px] sm:h-[400px] rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/5 relative hidden lg:block group"
            >
              <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-[32px] shadow-[inset_0_0_40px_rgba(173,206,193,0.05)] z-10" />
              <img 
                src="/pic_doctor/picnew.jpeg"
                alt="Dr. Harshvardhan Patil - Career"
                className="w-full h-full object-cover object-[center_60%] grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" 
              />
            </motion.div>
          </div>
        </div>

        {/* Right Scrolling Column */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="glass-card p-5 sm:p-10 rounded-2xl sm:rounded-[32px] flex flex-col sm:flex-row gap-4 sm:gap-8 items-start hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-[20px] bg-surface-container-highest flex items-center justify-center shrink-0 border border-white/5">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">{exp.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-headline-md text-lg sm:text-2xl text-on-surface mb-1 sm:mb-2">{exp.title}</h3>
                <p className="font-label-caps text-[10px] sm:text-[12px] text-primary mb-1">{exp.company}</p>
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-4 sm:mb-6 tracking-widest">{exp.period}</p>
                
                <ul className="space-y-2.5 sm:space-y-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 sm:gap-3 items-start">
                      <span className="material-symbols-outlined text-secondary text-xs sm:text-sm mt-0.5 sm:mt-1 shrink-0">check_circle</span>
                      <span className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
