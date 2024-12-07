 import { create } from "zustand";


interface GeneralStore {
    stepCheckMobile: boolean;
    setStepCheckMobile: (() => void) | null;

    previewProfilePic: string | null;
    setPreviewProfilePic: (value: string | null) => void;
}


 export const useGeneralStore = create<GeneralStore>((set) => ({

    stepCheckMobile: false,
    setStepCheckMobile: () => {
        set({ stepCheckMobile: true });
    },

    previewProfilePic: null,
    setPreviewProfilePic: (value) => {
        set({ previewProfilePic: value });
    }
  
 }));
