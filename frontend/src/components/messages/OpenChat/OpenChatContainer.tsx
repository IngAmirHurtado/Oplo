import { useEffect } from "react";

import { useMessageStore } from "@/store/useMessageStore";
import TopChatContainer from "@/components/messages/OpenChat/TopOpenChat";
import SendMessageContainer from "@/components/messages/OpenChat/SendMessageContainer";

const OpenChatContainer = () => {
  const { userChatSelected, getMessages } = useMessageStore();

  useEffect(() => {
    if (userChatSelected) {
      getMessages(userChatSelected._id);
    }
  }, [getMessages, userChatSelected]);

  return (
    <div className="flex flex-col justify-between h-full overflow-hidden ">
      <div className="hidden md:block">
        <TopChatContainer />
      </div>
      <div className=" h-full">
         <p>CONTENIDO</p> 
      </div>
     
      <SendMessageContainer receivedId={userChatSelected && userChatSelected._id}/>
    </div>
  );
};

export default OpenChatContainer;
