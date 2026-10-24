import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ArtPage } from "./pages/ArtPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { DisclaimerPage } from "./pages/DisclaimerPage";
import { CopyrightPage } from "./pages/CopyrightPage";
import { CSRPage } from "./pages/CSRPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/art",
    Component: ArtPage,
  },
  {
    path: "/terms",
    Component: TermsPage,
  },
  {
    path: "/privacy",
    Component: PrivacyPolicyPage,
  },
  {
    path: "/disclaimer",
    Component: DisclaimerPage,
  },
  {
    path: "/copyright",
    Component: CopyrightPage,
  },
  {
    path: "/csr",
    Component: CSRPage,
  },
]);