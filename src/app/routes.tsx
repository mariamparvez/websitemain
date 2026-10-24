import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ArtPage } from "./pages/ArtPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/art",
    Component: ArtPage,
  },
]);
