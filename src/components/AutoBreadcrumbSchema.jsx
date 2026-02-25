import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.codostack.com";

const titleMap = {
  about: "About Us",
  careers: "Careers",

  services: "Services",
  "content-marketing": "Content Marketing",
  design: "UI & UX Design",
  "mobile-apps": "Mobile Apps",
  seo: "SEO Services",
  "web-development": "Website Development",
  cloudcomputing: "Cloud Services",

  software: "Software",
  crm: "CRM",
  erp: "ERP",
  "project-management": "Project Management",
  billing: "Billing Software",
  chatbot: "Chatbot",
};

const AutoBreadcrumbSchema = () => {
  const location = useLocation();

  useEffect(() => {
    const paths = location.pathname.split("/").filter(Boolean);

    // ❌ No breadcrumb on Home
    if (paths.length === 0) return;

    const items = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
    ];

    let currentPath = "";

    paths.forEach((path, index) => {
      currentPath += `/${path}`;

      items.push({
        "@type": "ListItem",
        position: index + 2,
        name: titleMap[path] || path.replace(/-/g, " "),
        item: SITE_URL + currentPath,
      });
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };

    // 🔥 Remove old breadcrumb schema if exists
    const existing = document.getElementById("breadcrumb-schema");
    if (existing) {
      existing.remove();
    }

    // 🔥 Inject new schema
    const script = document.createElement("script");
    script.id = "breadcrumb-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    // 🧹 Cleanup on route change
    return () => {
      const script = document.getElementById("breadcrumb-schema");
      if (script) script.remove();
    };
  }, [location.pathname]);

  return null;
};

export default AutoBreadcrumbSchema;