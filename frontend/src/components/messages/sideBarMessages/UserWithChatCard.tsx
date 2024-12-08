

interface User {
    username: string
    profilePic: string
}

interface SideBarMUserCardProps {
    user: User | string
}

const UserWithChatCard = (props: SideBarMUserCardProps) => {
    const { user } = props;
    const { username, profilePic } = user as User;

  return (
     <div className="flex gap-3 bg-muted h-14 items-center rounded-lg p-3 transition hover:bg-primary/10 cursor-pointer">
        <img src={`${profilePic === "" ? "/imgs/default-user.svg" : profilePic}`} alt="profile" className="w-8 h-8 rounded-full" />
        <div className="flex flex-col justify-between">
            <p className="text-xs font-montserrat">{username}</p>
            <p>.</p>
        </div>
        
     </div>
  )
}

export default UserWithChatCard