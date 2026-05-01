import Hero from "@/components/hero";
import AboutSection from "@/components/aboutsection";
import SkillsSection from "@/components/skillsection";
import ProjectsSection from "@/components/projectsection";
import ContactSection from "@/components/contactsection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}