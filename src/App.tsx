import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Contato from "./pages/Contato";
import Suporte from "./pages/Suporte";
import Precos from "./pages/Precos";
import Integracoes from "./pages/Integracoes";
import Cases from "./pages/Cases";
import StagingBadge from "./components/StagingBadge";
import { initGA, trackPageview, attachCTATracking } from "./lib/analytics";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import DayNightToggle from "./components/DayNightToggle";

const queryClient = new QueryClient();

const AnalyticsListener = () => {
  const location = useLocation();
  useEffect(() => {
    initGA();
    attachCTATracking();
  }, []);
  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location]);
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <StagingBadge />
        <DayNightToggle />
        <BrowserRouter>
          <AnalyticsListener />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/lgpd" element={<Privacy />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/precos" element={<Precos />} />
            <Route path="/integracoes" element={<Integracoes />} />
            <Route path="/cases" element={<Cases />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
