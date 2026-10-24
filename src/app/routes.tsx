import { createBrowserRouter } from "react-router";
import { PublicHomePage } from "./pages/PublicHomePage";
import { LoginPage } from "./pages/admin/LoginPage";
import { DashboardPage } from "./pages/admin/DashboardPage";
import { TestimonialsManagePage } from "./pages/admin/TestimonialsManagePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicHomePage,
  },
  {
    path: "/admin/login",
    Component: LoginPage,
  },
  {
    path: "/admin/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/admin/testimonials",
    Component: TestimonialsManagePage,
  },
]);