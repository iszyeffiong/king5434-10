import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import Services from "./pages/Services";
import GeologicalServices from "./pages/services/GeologicalServices";
import EnvironmentalServices from "./pages/services/EnvironmentalServices";
import OceanographyMarine from "./pages/services/OceanographyMarine";
import GeochemicalServices from "./pages/services/GeochemicalServices";
import NewVenturesAssetMgt from "./pages/services/NewVenturesAssetMgt";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/geological-services" element={<GeologicalServices />} />
        <Route path="/services/environmental-services" element={<EnvironmentalServices />} />
        <Route path="/services/oceanography-marine" element={<OceanographyMarine />} />
        <Route path="/services/geochemical-services" element={<GeochemicalServices />} />
        <Route path="/services/new-ventures-asset-mgt" element={<NewVenturesAssetMgt />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
