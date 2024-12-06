import { create } from "zustand";
import {axiosInstance} from "../api/axios.ts"

interface User {
  id: string;
  email: string;
  name: string;
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
  logInRequest: (data: LogDataForm) => Promise<void>;
  signUpRequest: (data: LogDataForm) => Promise<void>;

  authError: string | null;
}

export const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  ischeckingAuth: true,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data});
    } catch (e) {
      console.error(e);
      set({ authUser: null });
    } finally{
      set({ ischeckingAuth: false });
    }
  },
  
  isLoggingInOrSigningOut: false,
  logInRequest: async (data) => {
    try{
      set({ isLoggingInOrSigningOut: true});
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data});
    }catch(e){
      console.error(e);
    } finally {
      set({ isLoggingInOrSigningOut: false});
    }
  },

  signUpRequest : async (data) => {
    try{
      set({ isLoggingInOrSigningOut: true})
      const res = await axiosInstance.post("/auth/signup", data);
      console.log(res.data);
      set({ authUser: res.data});
    }
    catch (e: unknown) {
       // @ts-expect-error Esto ignora el error al acceder a propiedades en un tipo 'unknown'
      set({ authError: e.response?.data?.message || 'Error desconocido' });
  }
    finally{
      set({ isLoggingInOrSigningOut: false});
    }
  },

  authError: null
}));
