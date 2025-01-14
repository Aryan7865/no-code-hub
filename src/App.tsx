import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<div className="p-8">About Page (Coming Soon)</div>} />
            <Route path="initiatives" element={<div className="p-8">Initiatives Page (Coming Soon)</div>} />
            <Route path="resources" element={<div className="p-8">Resources Page (Coming Soon)</div>} />
            <Route path="blog" element={<div className="p-8">Blog Page (Coming Soon)</div>} />
            <Route path="contact" element={<div className="p-8">Contact Page (Coming Soon)</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;