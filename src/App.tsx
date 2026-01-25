import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingInvite from "./pages/WeddingInvite"; // <--- 1. Importamos la página nueva

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Ruta Principal (Tu Portafolio/Landing) */}
          <Route path="/" element={<Index />} />
          
          {/* 2. Nueva Ruta para la Invitación de Boda */}
          <Route path="/invitacion-boda" element={<WeddingInvite />} />
          
          {/* Ruta para errores 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;