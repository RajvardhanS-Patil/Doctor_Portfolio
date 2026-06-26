"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CurvedSeparator } from "@/components/ui/DecorativeElements";

export default function GallerySection() {
  const photos = [
    {
      src: "/images/clinic-patient.jpeg",
      alt: "Patient Consultation",
      caption: "Comprehensive Patient Assessment",
      style: "aspect-[3/4] rounded-[40px] rounded-tl-[80px]"
    },
    {
      src: "/images/medical-award.jpeg",
      alt: "Medical Recognition",
      caption: "Professional Excellence",
      style: "aspect-[3/4] rounded-[40px] rounded-br-[80px]"
    }
  ];

  return (
    <section className="relative py-16 md:py-32 bg-surface-container/80 backdrop-blur-2xl overflow-hidden" id="gallery">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <span className="font-label-lg text-secondary uppercase tracking-widest mb-4 block">Professional Moments</span>
          <h2 className="font-headline-lg text-primary">Clinical Journey</h2>
        </motion.div>

        {/* 2-Column Grid Layout, Centered and Max Width to avoid being too large */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {photos.map((photo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden bg-surface-container-high shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer liquid-glass ${photo.style}`}
            >
              <Image 
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-[center_top] group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1] filter contrast-[1.05]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient Overlay for Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-12">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <span className="font-label-lg text-secondary-fixed tracking-widest block mb-2">GALLERY</span>
                  <span className="font-headline-sm text-white">{photo.caption}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <CurvedSeparator className="-mb-1" fill="var(--color-primary)" />
    </section>
  );
}
