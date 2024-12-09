import { useEffect, useRef } from "react";

import { useAuthStore } from "@/store/useAuthStore";
import { useMessageStore } from "@/store/useMessageStore";
import TopChatContainer from "@/components/messages/OpenChat/TopOpenChat";
import SendMessageContainer from "@/components/messages/OpenChat/SendMessageContainer";
import MessageItem from "./MessageItem";
import  MessageSkeleton  from "./MessageSkeleton";


const OpenChatContainer = () => {
  const { userChatSelected, getMessages, messages,listenLiveMessagesInChat, unListenLiveMessagesInChat  } = useMessageStore();
  const { authUser } = useAuthStore();

  const scrollToBotton = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    scrollToBotton.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])

  useEffect(() => {
    if (userChatSelected) {
      getMessages(userChatSelected._id);
      listenLiveMessagesInChat();

      return () => unListenLiveMessagesInChat();
    }
  }, [getMessages, userChatSelected, listenLiveMessagesInChat, unListenLiveMessagesInChat]);



  return (
    <div className="flex flex-col justify-between h-full">
      <div className="hidden md:block">
        <TopChatContainer />
      </div>
      <div className="p-1 pb-5 w-full flex flex-col overflow-y-auto gap-4  h-full ">
  {messages ?
          messages.map((message) =>
            authUser && message.senderId === authUser._id ? ( 
              <MessageItem
                key={message._id}
                site="end"
                createdAt={message.createdAt}
                image={message.image}
                text={message.text}
                />
            ) : (
              <MessageItem
                key={message._id}
                site="start"
                createdAt={message.createdAt}
                image={message.image}
                text={message.text}
              />
              
            )
          )      : <MessageSkeleton />    }
        <div ref={scrollToBotton} />
        
      </div>

      <SendMessageContainer
        receivedId={userChatSelected && userChatSelected._id}
      />
    </div>
  );
};

export default OpenChatContainer;
