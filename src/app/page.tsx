import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThesisSection from "@/components/ThesisSection";
import CoInvestSection from "@/components/CoInvestSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ThesisSection />
        <CoInvestSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
