import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingInvite from "./pages/WeddingInvite";
import XvInviteRed from "./pages/XvInviteRed";
// Importación de la nueva invitación de Bautizo
import BaptismInvite from "./pages/BaptismInvite";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Ruta principal (Landing Page) */}
          <Route path="/" element={<Index />} />
          
          {/* Rutas de Invitaciones */}
          <Route path="/invitacion-boda" element={<WeddingInvite />} />
          <Route path="/xv-valentina" element={<XvInviteRed />} />
          <Route path="/invitacion-bautizo" element={<BaptismInvite />} />
          
          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;