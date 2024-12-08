

import CustomIcon from '@/components/CustomIcon';
import MobileMenu from '@/components/navBar/MobileMenu'
import { ModeToggle } from '@/components/theme/mode-toggle';
import { useMessageStore } from '@/store/useMessageStore'

import { X } from 'lucide-react'

const TopChatContainer = () => {
    const { userChatSelected, setChatSelected } = useMessageStore();

  return (
    <div className="flex justify-between items-center  p-3 bg-muted rounded-lg w-full">
        <div className="flex items-center w-full gap-3">
        <MobileMenu messagePage={true}/>
          <img
            src={`${
              userChatSelected?.profilePic === ""
                ? "/imgs/default-user.svg"
                : userChatSelected?.profilePic
            }`}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col justify-between">
            <p className="text-sm">
              {userChatSelected && userChatSelected.username}
            </p>
            <p>.</p>
          </div>
        </div>
        <div className='flex gap-1'>
            <div className='md:hidden'>
                <ModeToggle />
            </div>
            
            <button  onClick={() => setChatSelected(null)}>
          <CustomIcon icon={X} variant='destructive' />
        </button> 
        </div>
       
      </div>
  )
}

export default TopChatContainer