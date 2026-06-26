"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Outpatient Diagnostics",
    description: "Delivering precise clinical evaluations, accurate diagnoses, and structured long-term treatment strategies.",
    icon: "assignment_ind"
  },
  {
    category: "Emergency & Acute Care",
    description: "Providing rapid triage, life-saving interventions, and high-stakes decision-making in critical scenarios.",
    icon: "emergency"
  },
  {
    category: "Telemedicine & Digital Health",
    description: "Expanding healthcare access through advanced digital consultations and secure remote patient monitoring.",
    icon: "monitor_heart"
  },
  {
    category: "Interventional Procedures",
    description: "Highly skilled in essential clinical procedures including IV cannulation, IM injections, wound suturing, and catheterisation.",
    icon: "vaccines"
  },
  {
    category: "Patient-Centered Communication",
    description: "Translating complex medical terminology into clear, empathetic guidance for patients and their families.",
    icon: "record_voice_over"
  },
  {
    category: "Clinical Documentation",
    description: "Meticulous case documentation, discharge summaries, and accurate medical record keeping using EMR systems.",
    icon: "description"
  }
];

export default function ExpertiseSection() {
  return (
    <section className="py-20 sm:py-[120px] px-margin-mobile sm:px-margin-desktop max-w-container-max mx-auto w-full" id="expertise">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-16"
      >
        <span className="font-label-caps text-label-caps text-primary mb-4 block">Clinical Competency</span>
        <h2 className="font-headline-md text-2xl sm:text-headline-md text-on-surface">Areas of Expertise</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-bento-gap">
        {SKILLS.map((skill, index) => (
          <motion.div 
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="glass-card p-5 sm:p-10 rounded-2xl sm:rounded-[32px] border border-white/5 hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform duration-500 hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-secondary text-3xl sm:text-4xl mb-4 sm:mb-6 block">{skill.icon}</span>
            <h3 className="font-headline-md text-base sm:text-xl text-on-surface mb-2 sm:mb-4">{skill.category}</h3>
            <p className="font-body-md text-[13px] sm:text-body-md text-on-surface-variant leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
