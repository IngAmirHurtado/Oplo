import { useEffect, useRef } from "react";

import { useAuthStore } from "@/store/useAuthStore";
import { useMessageStore } from "@/store/useMessageStore";
import TopChatContainer from "@/components/messages/OpenChat/TopOpenChat";
import SendMessageContainer from "@/components/messages/OpenChat/SendMessageContainer";
import { formatDate } from "@/lib/utils";

const OpenChatContainer = () => {
  const { userChatSelected, getMessages, messages,  } = useMessageStore();
  const { authUser } = useAuthStore();

  const scrollToBotton = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    scrollToBotton.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])

  useEffect(() => {
    if (userChatSelected) {
      getMessages(userChatSelected._id);
    }
  }, [getMessages, userChatSelected]);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="hidden md:block">
        <TopChatContainer />
      </div>
      <div className="p-1 pb-5 w-full flex flex-col overflow-y-auto gap-4  h-full ">
       
        {messages &&
          messages.map((message) =>
            authUser && message.senderId === authUser._id ? (
              <div className="flex flex-col gap-1 w-full items-end mt-4">
                <p className="font-montserrat text-xs text-gray-500">
                  {formatDate(message.createdAt)}
                </p>
                <div className="flex flex-col bg-muted py-2 px-4 rounded-lg gap-2">
                  {message.image && (<img src={message.image} alt="message" className="w-40 h-40 object-cover rounded-lg" />)}
                  <p className="font-montserrat text-sm">{message.text}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1 w-full items-start">
                <p className="font-montserrat text-xs text-gray-500">
                  {formatDate(message.createdAt)}
                </p>
                <div className="flex flex-col bg-muted py-2 px-4 rounded-lg gap-2  mt-4">
                  {message.image && (<img src={message.image} alt="message" className="w-40 h-40 object-cover rounded-lg" />)}
                  <p className="font-montserrat text-sm">{message.text}</p>
                </div>
              </div>
            )
          )}
        <div ref={scrollToBotton} />
        
      </div>

      <SendMessageContainer
        receivedId={userChatSelected && userChatSelected._id}
      />
    </div>
  );
};

export default OpenChatContainer;
