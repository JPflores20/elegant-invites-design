import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WeddingInvite = lazy(() => import("./pages/WeddingInvite"));
const XvInviteRed = lazy(() => import("./pages/XvInviteRed"));
const BaptismInvite = lazy(() => import("./pages/BaptismInvite"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
