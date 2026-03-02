import React from "react";

const Sitemap = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>

      <ul className="space-y-2 text-blue-600">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="/careers" className="hover:underline">Careers</a></li>

        <li className="font-semibold mt-4">Services</li>
        <li><a href="/services/content-marketing">Content Marketing</a></li>
        <li><a href="/services/design">Design</a></li>
        <li><a href="/services/mobile-apps">Mobile Apps</a></li>
        <li><a href="/services/seo">SEO</a></li>
        <li><a href="/services/web-development">Website Development</a></li>
        <li><a href="/services/cloudcomputing">Cloud Computing</a></li>

        <li className="font-semibold mt-4">Software</li>
        <li><a href="/software/crm">CRM</a></li>
        <li><a href="/software/erp">ERP</a></li>
        <li><a href="/software/project-management">Project Management</a></li>
        <li><a href="/software/billing">Billing Software</a></li>
        <li><a href="/software/chatbot">Chatbot</a></li>
      </ul>
    </div>
  );
};

export default Sitemap;