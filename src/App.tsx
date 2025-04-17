
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import GeneralEthics from "./pages/GeneralEthics";
import Frameworks from "./pages/Frameworks";
import NotFound from "./pages/NotFound";
import Risks from "./pages/Risks";
import OSINTRisks from "./pages/risks/OSINT";
import DeepfakeRisks from "./pages/risks/Deepfakes";
import IdentityTheftRisks from "./pages/risks/IdentityTheft";
import DataTheftRisks from "./pages/risks/DataTheft";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/general-ethics" element={<GeneralEthics />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/risks/osint" element={<OSINTRisks />} />
          <Route path="/risks/deepfakes" element={<DeepfakeRisks />} />
          <Route path="/risks/identity-theft" element={<IdentityTheftRisks />} />
          <Route path="/risks/data-theft" element={<DataTheftRisks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
