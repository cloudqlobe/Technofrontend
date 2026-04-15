import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import CareerPage from "./pages/careers/CareerPage";
import MarketingPage from "./pages/service/Content_Marketing/MarketingPage";
import DesignPage from "./pages/service/Design/DesignPage";
import MobileAppPage from "./pages/service/Mobile_Apps/MobileAppPage";
import SEOPage from "./pages/service/SEO/SEOPage";
import WebsitePage from "./pages/service/Website_Development/WebsitePage";
import CloudPage from "./pages/service/Cloudcomputing/CloudPage";
import CRMPage from "./pages/softwares/CRM/CRMPage";
import ERPPage from "./pages/softwares/ERP/ERPPage";
import ProjectManagementPage from "./pages/softwares/Project Management/ProjectManagementPage";
import BillingSoftwarePage from "./pages/softwares/Billing_Software/BillingSoftwarePage";
import ScrollToTop from "./ScrollToTop";
import ChatbotPage from "./pages/softwares/Chatbot/ChatbotPage";
import AutoBreadcrumbSchema from "./components/AutoBreadcrumbSchema";
import Sitemap from "./pages/sitemap/Sitemap";
import WorksPage from "./pages/works/page";
import WhatsAppApp from "./components/WhatsAppApp";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AutoBreadcrumbSchema />
      <WhatsAppApp/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/our-works" element={<WorksPage />} />
        <Route path="/sitemap" element={<Sitemap />} />

        <Route path="/services/*" element={
          <Routes>
            <Route path="/content-marketing" element={<MarketingPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/mobile-apps" element={<MobileAppPage />} />
            <Route path="/seo" element={<SEOPage />} />
            <Route path="/web-development" element={<WebsitePage />} />
            <Route path="/cloudcomputing" element={<CloudPage />} />

          </Routes>
        } />
        <Route path="/software/*" element={
          <Routes>
            <Route path="/crm" element={<CRMPage />} />
            <Route path="/erp" element={<ERPPage />} />
            <Route path="/project-management" element={<ProjectManagementPage />} />
            <Route path="/billing" element={<BillingSoftwarePage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
          </Routes>
        } />
      </Routes>
    </Router>
  );
};

export default App;
