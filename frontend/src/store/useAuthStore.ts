import { create } from "zustand";
import { axiosInstance } from "../api/axios.ts";

interface User {
  id: string;
  email: string;
  username: string;
  profilePic: string;
}

interface LogDataForm {
  username?: string;
  email: string;
  password: string;
}

interface AuthStore {
  authUser: User | null;
  ischeckingAuth: boolean;
  checkAuth: () => Promise<void>;

  isLoggingInOrSigningOut: boolean;
  authError: string | null;
  rebootAuthError: () => void;

  logInRequest: (data: LogDataForm) => Promise<void>;
  signUpRequest: (data: LogDataForm) => Promise<void>;
  logOutRequest: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  ischeckingAuth: true,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch {
      set({ authUser: null });
    } finally {
      set({ ischeckingAuth: false });
    }
  },

  isLoggingInOrSigningOut: false,
  authError: null,

  logInRequest: async (data) => {
    try {
      set({ isLoggingInOrSigningOut: true });
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
    } catch (e) {
      // @ts-expect-error Esto ignora el error al acceder a propiedades en un tipo 'unknown'
      set({ authError: e.response?.data?.message });
    } finally {
      set({ isLoggingInOrSigningOut: false });
    }
  },

  signUpRequest: async (data) => {
    try {
      set({ isLoggingInOrSigningOut: true });
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res.data);
      set({ authUser: res.data });
    } catch (e: unknown) {
      // @ts-expect-error Esto ignora el error al acceder a propiedades en un tipo 'unknown'
      set({ authError: e.response?.data?.message || "Error desconocido" });
    } finally {
      set({ isLoggingInOrSigningOut: false });
    }
  },

  logOutRequest: async () => {
    try{
      await axiosInstance.get("/auth/logout");
      set({ authUser: null });
    }
    catch{
      set({ authUser: null });
    }
  },

  rebootAuthError: () => {
    set({ authError: null });
  },
}));
