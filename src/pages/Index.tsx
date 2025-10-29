import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhyHumind from "@/components/WhyHumind";
import Integrations from "@/components/Integrations";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useMemo } from "react";
import ComplianceBadges from "@/components/ComplianceBadges";
import LeadMagnet from "@/components/LeadMagnet";

const Index = () => {
  const seo = useMemo(() => {
    const base = import.meta.env.VITE_SITE_URL || "/";
    return {
      title: "humind.ia — Chatbot humanizado que agenda, responde e converte",
      description:
        "Um chatbot no tom da sua marca. WhatsApp oficial, agendamento automático e métricas. Implante em dias, não meses.",
      url: "/",
      image: "/placeholder.svg",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "humind.ia",
          url: base,
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "humind.ia",
          applicationCategory: "CustomerSupport",
          operatingSystem: "Web",
          offers: { "@type": "Offer", priceCurrency: "BRL", price: "1490" },
          description:
            "Chatbot humanizado para WhatsApp que agenda, responde e integra com seu fluxo.",
          brand: { "@type": "Brand", name: "humind.ia" },
        },
      ],
    } as const;
  }, []);
  return (
    <main className="min-h-screen">
      <SEOHead {...seo} />
      <Hero />
      <SocialProof />
      <ComplianceBadges />
      <HowItWorks />
      <Features />
      <WhyHumind />
      <Integrations />
      <UseCases />
      <Pricing />
      <FAQ />
      <LeadMagnet />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
