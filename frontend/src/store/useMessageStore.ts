import { axiosInstance } from "@/api/axios";
import { create } from "zustand";

interface Loading {
    type: 'isLoadingUsersWithChat' | null;
    isLoading: boolean;
}

interface User {
    _id: string;
    email: string;
    username: string;
    profilePic: string;
}

interface Messages {
    senderId: string;
    receiverId: string;
    text: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
}

interface FormData {
    text?: string;
    image?: File;
    receiverId: string;
}

interface MessageStore {
    loading: Loading
    usersWithChat: User[];
    getUsersWithChat: () => Promise<void>;
    userChatSugesstions: User[];

    userChatSelected : User | null;
    setChatSelected: (user : User | null) => void;
    
    messages: Messages[];
    getMessages: (userId : string) => Promise<void>;

    sendMessage: (data: FormData) => Promise<void>;
}


export const useMessageStore = create<MessageStore>((set) => ({
    loading: { type:  null, isLoading: false },

    usersWithChat: [],
    userChatSugesstions: [],
    userChatSelected: null,
    messages: [],

    setChatSelected: (user) => {
        set({userChatSelected: user})
    },

    getUsersWithChat: async () => {
        try{
            set({loading: {type: 'isLoadingUsersWithChat', isLoading: true}})
            const res = await axiosInstance.get('/message/users-with-chat')
            set({usersWithChat: res.data})
            

            if(res.data.length < 4){
                const res = await axiosInstance.get('/user/get-random-suggestion');
                set({userChatSugesstions: res.data})
            }
        }catch{
            console.log('error')
        } finally{
            set({loading: {type: null, isLoading: false}})
        }
    },

    getMessages: async (userId) => {
        try{
            const res = await axiosInstance.get(`/message/get/${userId}`);
            set({messages: res.data})
        }catch{
            console.log('error al obtener mensajes')
        }
    },


    sendMessage: async (data) => {
        try{
            const newData = {
                text: data.text,
                image: data.image
            }
           
            const response = await axiosInstance.post(`/message/send/${data.receiverId}`, newData)
            console.log(response.data)
            
        }catch{
            console.log('error al enviar mensaje')
        }
    }

}))