import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <Integrations />
      <UseCases />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
