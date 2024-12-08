import { useMessageStore } from "@/store/useMessageStore";

import NavBar from "@/components/navBar/NavBar";
import SideBarMessages from "@/components/messages/sideBarMessages/SideBarMessages";
import WelcomeMessage from "@/components/messages/WelcomeMessage";

const MessagesPage = () => {
  const {userChatSelected} = useMessageStore();
  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden bg-muted ">
      <NavBar messagePage={true}/>
      <div className="w-full lg:w-[1100px]  mt-16 h-full flex gap-3 ">
        <div className="min-w-[250px]  py-3 hidden md:block ">
          <SideBarMessages />
        </div>
        <div className="md:py-3 w-full max-h-full overflow-hidden flex-grow">
         
          <div className="bg-background h-full rounded-lg p-3 overflow-auto max-h-[calc(100vh-88px)]">
            
                 {userChatSelected ? <h1>Seleccionado</h1> : (
                  <WelcomeMessage />
                 )}
           
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default MessagesPage;
