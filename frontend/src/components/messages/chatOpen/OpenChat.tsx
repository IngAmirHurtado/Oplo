import { useEffect } from "react";

import { useMessageStore } from "@/store/useMessageStore";
import TopChatContainer from "./TopOpenChat";

const OpenChat = () => {
  const { userChatSelected, getMessages, messages } = useMessageStore();

  useEffect(() => {
    if (userChatSelected) {
      getMessages(userChatSelected._id);
    }
  }, [getMessages, userChatSelected]);

  console.log(userChatSelected);
  console.log(messages);

  return (
    <div className="flex flex-col justify-between h-full overflow-hidden ">
      <div className="hidden md:block">
        <TopChatContainer />
      </div>
      <div className=" h-full">
         <p>CONTENIDO</p> 
      </div>
     
      <p>Abajo</p>
    </div>
  );
};

export default OpenChat;
