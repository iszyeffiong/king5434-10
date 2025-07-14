import Header from "@/components/Header";
import CertificationBanner from "@/components/CertificationBanner";
import HeroSection from "@/components/HeroSection";
import CertificationsSection from "@/components/CertificationsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CertificationBanner />
      <HeroSection />
      <CertificationsSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
