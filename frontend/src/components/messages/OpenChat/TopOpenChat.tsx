import { useAuthStore } from '@/store/useAuthStore';
import { useMessageStore } from '@/store/useMessageStore'

import CustomIcon from '@/components/CustomIcon';
import MobileMenu from '@/components/navBar/MobileMenu'
import { ModeToggle } from '@/components/theme/mode-toggle';


import { X } from 'lucide-react'

const TopChatContainer = () => {
  const { onlineUsers } = useAuthStore();
    const { userChatSelected, setChatSelected, clearMessages } = useMessageStore();

  return (
    <div className="flex justify-between items-center p-3 bg-muted rounded-lg w-full border-b fixed md:relative" >
        <div className="flex items-center w-full gap-3">
        <MobileMenu />
          <img
            src={`${
              userChatSelected?.profilePic === ""
                ? "/imgs/default-user.svg"
                : userChatSelected?.profilePic
            }`}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col justify-between">
            <p className="text-sm font-poppins">
              {userChatSelected && userChatSelected.username}
            </p>
            {userChatSelected && onlineUsers.includes(userChatSelected._id) ? (
              <p className="text-xs font-montserrat text-primary">En linea</p>
            ) : (
              <p className="text-xs font-montserrat text-gray-500">Desconectado</p>
            )}
          </div>
        </div>
        <div className='flex gap-1'>
            <div className='md:hidden'>
                <ModeToggle />
            </div>
            
            <div  onClick={() => {setChatSelected(null); clearMessages()  }}>
          <CustomIcon icon={X} variant='destructive' />
        </div> 
        </div>
       
      </div>
  )
}

export default TopChatContainer