import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DifferentialsSection />
        <MissionSection />
        <TestimonialsSection />
        <ContentSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
