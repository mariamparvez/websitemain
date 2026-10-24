import { RouterProvider } from "react-router";
import { router } from "./routes";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/AuthContext";
import { CMSProvider } from "./contexts/CMSContext";

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <CMSProvider>
          <RouterProvider router={router} />
        </CMSProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}