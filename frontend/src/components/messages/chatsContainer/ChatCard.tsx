import { useAuthStore } from "@/store/useAuthStore"
import { useMessageStore } from "@/store/useMessageStore"

interface User {
    username: string
    email: string
    profilePic: string
    _id: string
}

interface SideBarMUserCardProps {
    user: User 
}

const ChatCard = (props: SideBarMUserCardProps) => {
    const { user } = props;
    const { username, profilePic, _id} = user as User;
    const { onlineUsers } = useAuthStore();
    const { setChatSelected } = useMessageStore();

  return (
     <div className="flex gap-3 bg-muted h-14 items-center rounded-lg p-3 transition hover:bg-primary/10 cursor-pointer" onClick={() => {setChatSelected(user); }}>
        <div className="relative">
            
            <img src={`${profilePic || "/imgs/default-user.svg" }`} alt="profile" className="w-8 h-8 rounded-full" />
        </div>
        
        <div className="flex flex-col justify-between">
            <p className="text-xs font-montserrat">{username}</p>
            {onlineUsers.includes(_id) ? <p className="font-montserrat text-primary text-[0.6rem]">En linea</p> : <p className="font-montserrat text-gray-500 text-[0.6rem]">Desconectado</p>}
        </div>
        
     </div>
  )
}

export default ChatCard