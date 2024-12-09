import { create } from "zustand";
import { axiosInstance } from "../api/axios.ts";
import axios from "axios";

import {Socket, io} from "socket.io-client";

const BASE_URL = "http://localhost:3000";

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
  type: "checkingAuth" | "log" | "changingInfo" | "changingProfilePic" | "search" | null;
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
  onlineUsers: string[];
  setLoading: (type: LoadingState["type"], isLoading: boolean) => void;
  setError: (type: ErrorState["type"], message: string | null) => void;
  clearError: () => void;

  checkAuth: () => Promise<void>;
  logInRequest: (data: LogDataForm) => Promise<void>;
  signUpRequest: (data: LogDataForm) => Promise<void>;
  logOutRequest: () => Promise<void>;
  changeGeneralInfo: (data: ChangeGeneralInfo) => Promise<void>;
  changeProfilePic: (data: ChangeProfilePic) => Promise<void>;

  searchResults: User[] | null;
  getSearchResults: (query: string) => Promise<void>; 

  connectSocket: () => void;
  disconnectSocket: () => void;
  socket: Socket | null;
}


// Implementación del store
export const useAuthStore = create<AuthStore>((set, get) => ({
  authUser: null,
  loading: { type: null, isLoading: false },
  error: { type: null, message: null },

  searchResults:  null,
  getSearchResults: async (query: string) => {
    set({loading: {type: "search", isLoading: true}});
    try {
      const res = await axiosInstance.get(`/user/get-results/${query}`);
      set({searchResults: res.data});
    } catch (e) {
      console.log(e);
    } finally {
      set({loading: {type: null, isLoading: false}});
    }
  },

  socket: null,
  onlineUsers: [],

  

  setLoading: (type, isLoading) => set({ loading: { type, isLoading } }),
  setError: (type, message) => set({ error: { type, message } }),
  clearError: () => set({ error: { type: null, message: null } }),

  checkAuth: async () => {
    set({ loading: { type: "checkingAuth", isLoading: true } });
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket();
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
      get().connectSocket();
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
      get().connectSocket();
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
      get().disconnectSocket();
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

  },

  connectSocket: () => {
    const {authUser} = get()
    if(!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id
      }
    });
    socket.connect();
    set({socket});

    socket.on("onlineUsers", (onlineUsers: string[] ) => {
      set({onlineUsers});
    })
  },
  disconnectSocket: () => {
    if(get().socket?.connected){
      get().socket?.disconnect();
    }
  }
}));


