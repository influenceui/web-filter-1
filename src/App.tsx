import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorkTypeFilterDemo from "./pages/WorkTypeFilterDemo";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectTypeSelectDemo from "./pages/ProjectTypeSelectDemo";
import EditProjectPage from "./pages/EditProjectPage";
import ProjectEnquiryPage from "./pages/ProjectEnquiryPage";
import BrandDetailsPage from "./pages/BrandDetailsPage";
import CounterPage from "./pages/CounterPage";
import QuotationPage from "./pages/QuotationPage";
import QuotationDetailsPage from "./pages/QuotationDetailsPage";
import MessagingPage from "./pages/MessagingPage";
import ProjectCompletionPage from "./pages/ProjectCompletionPage";
import ProjectCreationSuccessPage from "./pages/ProjectCreationSuccessPage";
import ImageUploadPage from "./pages/ImageUploadPage";
import MarkProjectCompletedPage from "./pages/MarkProjectCompletedPage";
import CounterProposalPage from "./pages/CounterProposalPage";
import RevisionMessagePage from "./pages/RevisionMessagePage";
import ProposalMessagePage from "./pages/ProposalMessagePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create-project" element={<CreateProjectPage />} />
          <Route path="/edit-project" element={<EditProjectPage />} />
          <Route path="/project-enquiry" element={<ProjectEnquiryPage />} />
          <Route path="/brand-details" element={<BrandDetailsPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/quotation" element={<QuotationPage />} />
          <Route path="/quotation-details" element={<QuotationDetailsPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route
            path="/project-completion"
            element={<ProjectCompletionPage />}
          />
          <Route
            path="/project-creation-success"
            element={<ProjectCreationSuccessPage />}
          />
          <Route path="/image-upload" element={<ImageUploadPage />} />
          <Route
            path="/mark-project-completed"
            element={<MarkProjectCompletedPage />}
          />
          <Route path="/counter-proposal" element={<CounterProposalPage />} />
          <Route path="/revision-message" element={<RevisionMessagePage />} />
          <Route path="/proposal-message" element={<ProposalMessagePage />} />
          <Route
            path="/project-type-demo"
            element={<ProjectTypeSelectDemo />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
