import { useMessageStore } from "@/store/useMessageStore";

import NavBar from "@/components/navBar/NavBar";
import SideBar from "@/components/sideBar/SideBar";

import  OpenChatContainer  from "@/components/messages/OpenChat/OpenChatContainer";
import TopOpenChat from "@/components/messages/OpenChat/TopOpenChat";
import ChatsContainer from "@/components/messages/chatsContainer/ChatsContainer";


const MessagesPage = () => {
  const {userChatSelected} = useMessageStore();


  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden bg-muted ">

      <div className="md:hidden w-full h-0">
         { userChatSelected ?  <TopOpenChat /> :  <NavBar />}
      </div>

      <div className="hidden md:block">
        <NavBar  />
      </div>
     
      <div className="w-full lg:w-[1100px] mt-16 h-full flex gap-3 ">
        <div className="min-w-[250px]  py-3 hidden md:block ">
          <SideBar />
        </div>
        <div className="md:py-3 w-full max-h-full overflow-hidden flex-grow">
         
          <div className="h-full p-3 bg-background rounded-lg  md:max-h-[calc(100vh-88px)] ">
            
                 {userChatSelected ? <OpenChatContainer />  : (
                  <ChatsContainer />
                 )}
           
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default MessagesPage;
