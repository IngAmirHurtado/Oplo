import { axiosInstance } from "@/api/axios";
import { create } from "zustand";

interface Loading {
    type: 'isLoadingUsersWithChat' | null;
    isLoading: boolean;
}

interface MessageStore {
    loading: Loading
    usersWithChat: string[];
    getUsersWithChat: () => Promise<void>;
    userChatSugesstions: string[];

    userChatSelected : string | null;
    setChatSelected: (userId: string) => void;

}


export const useMessageStore = create<MessageStore>((set) => ({
    loading: { type:  null, isLoading: false },

    usersWithChat: [],
    userChatSugesstions: [],
    userChatSelected: null,
    setChatSelected: (userId: string) => {
        set({userChatSelected: userId})
    },
    getUsersWithChat: async () => {
        try{
            set({loading: {type: 'isLoadingUsersWithChat', isLoading: true}})
            const res = await axiosInstance.get('/message/users-with-chat')
            set({usersWithChat: res.data})
            

            if(res.data.length < 4){
                console.log('no users with chat')
                const res = await axiosInstance.get('/user/get-random-suggestion');
                set({userChatSugesstions: res.data})
                console.log(res.data)
            }
        }catch{
            console.log('error')
        } finally{
            set({loading: {type: null, isLoading: false}})
        }
    }

}))