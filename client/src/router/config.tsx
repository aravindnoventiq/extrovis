import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Leadership from "../pages/leadership/page";
import WorkWithUs from "../pages/work-with-us/page";
import WhoWeAre from "../pages/who-we-are/page";
import WhatWeOffer from "../pages/what-we-offer/page";
import ManufacturingDrugSubstances from "../pages/manufacturing-drug-substances/page";
import ManufacturingDrugProducts from "../pages/manufacturing-drug-products/page";
import GetInTouch from "../pages/get-in-touch/page";
import LegalDisclaimer from "../pages/legal-disclaimer/page";
import PrivacyPolicy from "../pages/privacy-policy/page";
import ResearchDevelopment from "../pages/research-development/page";
import Manufacturing from "../pages/manufacturing/page";
import SupplyChain from "../pages/supply-chain/page";
import OurCompany from "../pages/our-company/page";
import OurWay from "../pages/our-way/page";
import ThankYou from "../pages/thank-you/page";
import AdminLoginPage from "../pages/admin/LoginPage";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminDashboardPage from "../pages/admin/DashboardPage";
import { AdminPagesListPage, AdminPageEditPage } from "../pages/admin/PagesPage";
import AdminLeadershipPage from "../pages/admin/LeadershipPage";
import AdminCareersPage from "../pages/admin/CareersPage";
import AdminOfficesPage from "../pages/admin/OfficesPage";
import AdminInboxPage from "../pages/admin/InboxPage";

/** Register both `/path` and `/path/` so local URLs match live Extrovis links. */
function withTrailingSlash(path: string, element: React.ReactNode): RouteObject[] {
  if (path === "/") return [{ path: "/", element }];
  const base = path.replace(/\/$/, "");
  return [
    { path: base, element },
    { path: `${base}/`, element },
  ];
}

const routes: RouteObject[] = [
  ...withTrailingSlash("/", <Home />),
  ...withTrailingSlash("/who-we-are", <WhoWeAre />),
  ...withTrailingSlash("/what-we-offer", <WhatWeOffer />),
  ...withTrailingSlash("/research-development", <ResearchDevelopment />),
  ...withTrailingSlash("/manufacturing", <Manufacturing />),
  ...withTrailingSlash("/supply-chain", <SupplyChain />),
  ...withTrailingSlash("/manufacturing-drug-substances", <ManufacturingDrugSubstances />),
  ...withTrailingSlash("/manufacturing-drug-products", <ManufacturingDrugProducts />),
  ...withTrailingSlash("/leadership", <Leadership />),
  ...withTrailingSlash("/get-in-touch", <GetInTouch />),
  ...withTrailingSlash("/work-with-us", <WorkWithUs />),
  ...withTrailingSlash("/our-company", <OurCompany />),
  ...withTrailingSlash("/our-way", <OurWay />),
  ...withTrailingSlash("/thank-you", <ThankYou />),
  ...withTrailingSlash("/legal-disclaimer", <LegalDisclaimer />),
  ...withTrailingSlash("/privacy-policy", <PrivacyPolicy />),
  { path: "/admin/login", element: <AdminLoginPage /> },
  { path: "/admin/login/", element: <AdminLoginPage /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "pages", element: <AdminPagesListPage /> },
      { path: "pages/:slug", element: <AdminPageEditPage /> },
      { path: "leadership", element: <AdminLeadershipPage /> },
      { path: "careers", element: <AdminCareersPage /> },
      { path: "offices", element: <AdminOfficesPage /> },
      { path: "inbox", element: <AdminInboxPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
