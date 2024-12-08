import { useEffect } from "react";

import { useMessageStore } from "@/store/useMessageStore";
import TopChatContainer from "./TopChatContainer";

const ChatContainer = () => {
  const { userChatSelected, getMessages, messages } = useMessageStore();

  useEffect(() => {
    if (userChatSelected) {
      getMessages(userChatSelected._id);
    }
  }, [getMessages, userChatSelected]);

  console.log(userChatSelected);
  console.log(messages);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden">
      <div className="hidden md:block">
        <TopChatContainer />
      </div>
      <div>
         <p>CONTENIDO</p> 
      </div>
     
      <p>Abajo</p>
    </div>
  );
};

export default ChatContainer;
