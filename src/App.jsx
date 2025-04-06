import React from "react";
import HomePage from "./pages/home/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Fixed typo from Navabar to Navbar
import AboutPage from "./pages/about/page";
import MarketingPage from "./pages/service/Content_Marketing/page";
import Design_Page from "./pages/service/Design/page";
import MobileAppPage from "./pages/service/Mobile_Apps/page";
import SEOPage from "./pages/service/SEO/page";
import WebsitePage from "./pages/service/Website_Development/page";
import WorksPage from "./pages/works/page";
import CareerPage from "./pages/careers/page";
import CRMPage from "./pages/softwares/CRM/page";
import ERPPage from "./pages/softwares/ERP/page";
import Project_Management from "./pages/softwares/Project Management/page";
import Billing_Software_Page from "./pages/softwares/Billing_Software/page";
import HRM_Page from "./pages/softwares/HRM/page";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/*" element={
          <Routes>
            <Route path="/content-marketing" element={<MarketingPage />} />
            <Route path="/design" element={<Design_Page />} />
            <Route path="/mobile-apps" element={<MobileAppPage />} />
            <Route path="/seo" element={<SEOPage />} />
            <Route path="/web-development" element={<WebsitePage />} />
          
          </Routes>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-works" element={<WorksPage />} />
        <Route path="/software/*" element={
          <Routes>
            <Route path="/crm" element={<CRMPage />} />
            <Route path="/erp" element={<ERPPage />} />
            <Route path="/project-management" element={<Project_Management />} />
            <Route path="/billing" element={<Billing_Software_Page />} />
            <Route path="/hrm" element={<HRM_Page />} />
          </Routes>
        } />
        <Route path="/careers" element={<CareerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
