import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useAuthStore } from "./store/useAuthStore";
import { useMessageStore } from "./store/useMessageStore";

import { ThemeProvider } from "@/components/theme/theme-provider";

import PrivateRoutes from "@/components/routes/PrivateRoutes";
import PublicRoutes from "@/components/routes/PublicRoutes";

import LogInPage from "@/pages/LogInPage";
import SignUp from "@/pages/SignUpPage";

import HomePage from "@/pages/HomePage";
import MyProfilePage from "@/pages/MyProfilePage";
import MessagesPage from "@/pages/Messages";

import { Toaster } from "@/components/ui/toaster";

import { Loader } from "lucide-react";


function App() {
  const { checkAuth, loading } = useAuthStore();
  const { setChatSelected, clearMessages } = useMessageStore();

  useEffect(() => {
    checkAuth();
    setChatSelected(null)
    clearMessages()
  }, [checkAuth, setChatSelected, clearMessages]);

  if (loading.type === "checkingAuth" && loading.isLoading) {
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
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<MyProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Route>
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
