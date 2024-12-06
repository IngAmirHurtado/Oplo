 import { create } from "zustand";


interface GeneralStore {
    stepCheckMobile: boolean;
    setStepCheckMobile: (() => void) | null;
}


 export const useGeneralStore = create<GeneralStore>((set) => ({

    stepCheckMobile: false,
    setStepCheckMobile: () => {
        set({ stepCheckMobile: true });
    }
  
 }));
