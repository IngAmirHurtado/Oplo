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
    const { username, profilePic} = user as User;
    const { setChatSelected } = useMessageStore();

  return (
     <div className="flex gap-3 bg-muted h-14 items-center rounded-lg p-3 transition hover:bg-primary/10 cursor-pointer" onClick={() => {setChatSelected(user)}}>
        <img src={`${profilePic || "/imgs/default-user.svg" }`} alt="profile" className="w-8 h-8 rounded-full" />
        <div className="flex flex-col justify-between">
            <p className="text-xs font-montserrat">{username}</p>
            <p>.</p>
        </div>
        
     </div>
  )
}

export default ChatCard