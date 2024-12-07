import { create } from "zustand";
import { axiosInstance } from "../api/axios.ts";
import axios from "axios";

// Tipos
export type User = {
  _id: string;
  email: string;
  username: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
  followers: string[];
  following: string[];
};

interface LogDataForm {
  username: string;
  email?: string;
  password: string;
}

interface ChangeGeneralInfo {
  username: string;
  email: string;
}

interface ChangeProfilePic {
  profilePic: string | ArrayBuffer | null;
}


interface LoadingState {
  type: "checkingAuth" | "log" | "changingInfo" | "changingProfilePic" | null;
  isLoading: boolean;
}

interface ErrorState {
  type: "auth" | "changeInfo" | null;
  message: string | null;
}

interface AuthStore {
  authUser: User | null;
  loading: LoadingState;
  error: ErrorState;
  setLoading: (type: LoadingState["type"], isLoading: boolean) => void;
  setError: (type: ErrorState["type"], message: string | null) => void;
  clearError: () => void;

  checkAuth: () => Promise<void>;
  logInRequest: (data: LogDataForm) => Promise<void>;
  signUpRequest: (data: LogDataForm) => Promise<void>;
  logOutRequest: () => Promise<void>;
  changeGeneralInfo: (data: ChangeGeneralInfo) => Promise<void>;
  changeProfilePic: (data: ChangeProfilePic) => Promise<void>;
}


// Implementación del store
export const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  loading: { type: null, isLoading: false },
  error: { type: null, message: null },

  setLoading: (type, isLoading) => set({ loading: { type, isLoading } }),
  setError: (type, message) => set({ error: { type, message } }),
  clearError: () => set({ error: { type: null, message: null } }),

  checkAuth: async () => {
    set({ loading: { type: "checkingAuth", isLoading: true } });
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch {
      set({ authUser: null });
    } finally {
      set({ loading: { type: null, isLoading: false } });
    }
  },

  logInRequest: async (data) => {
    set({ loading: { type: "log", isLoading: true } });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
    } catch (e) {
       if(axios.isAxiosError(e) && e.response){
        set({ error: { type: "auth", message: e.response.data.message } });
       } else {
        set({ error: { type: "auth", message: "Error de conexión" } });
      }
    } finally {
      set({ loading: { type: null, isLoading: false } });
    }
  },

  signUpRequest: async (data) => {
    set({ loading: { type: "log", isLoading: true } });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
    } catch (e) {
        if(axios.isAxiosError(e) && e.response){
          set({ error: { type: "auth", message: e.response.data.message } });
        }
        else {
          set({ error: { type: "auth", message: "Error de conexión" } });
        }
    } finally {
      set({ loading: { type: null, isLoading: false } });
    }
  },

  logOutRequest: async () => {
    try {
      await axiosInstance.get("/auth/logout");
      set({ authUser: null });
    } catch {
      set({ authUser: null });
    }
  },

  changeGeneralInfo: async (data) => {
    set({ loading: { type: "changingInfo", isLoading: true } });
    try {
      const res = await axiosInstance.put("/user/update-general-info", data);
      set({ authUser: res.data });
    } catch (e) {
      if(axios.isAxiosError(e) && e.response){
        set({ error: { type: "changeInfo", message: e.response.data.message } });
      }
    } finally {
      set({ loading: { type: null, isLoading: false } });
    }
  },

  changeProfilePic: async (data) => {
    try{
      const res = await axiosInstance.put("/user/update-profile-pic", data);
      set({ authUser: res.data });
      console.log(res.data);
    }
    catch(e){
      console.log(e);
    }

  }
}));
