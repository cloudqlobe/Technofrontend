import HomePage from "./pages/home/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Fixed typo from Navabar to Navbar
import AboutPage from "./pages/about/Page";
import MarketingPage from "./pages/service/Content_Marketing/Page";
import MobileAppPage from "./pages/service/Mobile_Apps/Page";
import SEOPage from "./pages/service/SEO/Page";
import WebsitePage from "./pages/service/Website_Development/Page";
import Cloudcomputing from "./pages/service/Cloudcomputing/Page"
import CareerPage from "./pages/careers/Page";
import CRMPage from "./pages/softwares/CRM/Page";
import ERPPage from "./pages/softwares/ERP/Page";
import DesignPage from "./pages/service/Design/Page";
import ProjectManagement from "./pages/softwares/Project Management/Page";
import BillingSoftwarePage from "./pages/softwares/Billing_Software/Page";
import HRMPage from "./pages/softwares/HRM/Page";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/*" element={
          <Routes>
            <Route path="/content-marketing" element={<MarketingPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/mobile-apps" element={<MobileAppPage />} />
            <Route path="/seo" element={<SEOPage />} />
            <Route path="/web-development" element={<WebsitePage />} />
            <Route path="/cloudcomputing" element={<Cloudcomputing />} />
          
          </Routes>
        } />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/our-works" element={<WorksPage />} /> */}
        <Route path="/software/*" element={
          <Routes>
            <Route path="/crm" element={<CRMPage />} />
            <Route path="/erp" element={<ERPPage />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/billing" element={<BillingSoftwarePage />} />
            <Route path="/hrm" element={<HRMPage />} />
          </Routes>
        } />
        <Route path="/careers" element={<CareerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
