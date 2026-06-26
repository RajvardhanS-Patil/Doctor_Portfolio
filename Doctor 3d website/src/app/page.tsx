import ScrollyCanvas from "@/components/ScrollyCanvas";
import AboutSection from "@/components/sections/AboutSection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background selection:bg-primary selection:text-on-primary">
      {/* 1. Hero Scrollytelling Sequence */}
      <ScrollyCanvas />

      {/* 2. Below-the-fold Content */}
      <div className="relative z-10 w-full flex flex-col bg-background">
        <AboutSection />
        <QualificationsSection />
        <ExperienceSection />
        <ExpertiseSection />
        <GallerySection />
        <ContactSection />
      </div>
    </main>
  );
}
