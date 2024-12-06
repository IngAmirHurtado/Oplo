import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";

import LogInPage from "./pages/LogInPage";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { PrivateRoutes } from "./components/routes/PrivateRoutes";
import { PublicRoutes } from "./components/routes/PublicRoutes";

function App() {
  const { checkAuth, ischeckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (ischeckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader
          className="w-10 h-10 animate-spin"
          stroke="#0AFFD6"
          strokeWidth={1}
        />
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
