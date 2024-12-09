import { useEffect } from "react";

import { useMessageStore } from "@/store/useMessageStore";

import ChatCard from "@/components/messages/chatsContainer/ChatCard";

import ChatCardsSkeleton from "./ChatCardsSkeleton";



const ChatsContainer = () => {
  const { getUsersWithChat, usersWithChat, loading, userChatSugesstions } =
    useMessageStore();

  useEffect(() => {
    getUsersWithChat();
  }, [getUsersWithChat]);

  return (
    <div className="flex h-full flex-col justify-between p-3  overflow-auto">
        <div className="flex flex-col gap-3 font-poppins mt-2 w-full">
          <p className="text-xs mb-2">Chats recientes</p>
          {loading.type === "isLoadingUsersWithChat" && loading.isLoading ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 2 }, (_, i) => (
                <ChatCardsSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {usersWithChat &&
                usersWithChat.map((user, i) => 
                <div key={i}>
                <ChatCard user={user} />
                </div> )}

              {usersWithChat.length === 0 && (
                <p className="text-xs text-gray-400 md-2">
                  No tienes conversaciones recientes
                </p>
              )}

              {usersWithChat.length < 4 &&(
                <div className="flex flex-col gap-3">
                  <div className="mt-6 flex flex-col gap-3">
                    <p className="text-xs mb-2">Sugerencias para ti</p>
                    {userChatSugesstions.map((user, i) => (
                      <div key={i}>
                      <ChatCard user={user} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
    
      </div>
    </div>
  );
};

export default ChatsContainer;
