import { useEffect } from "react";

import { Link } from "react-router-dom";

import { useMessageStore } from "@/store/useMessageStore";

import CustomIcon from "@/components/CustomIcon";

import { ArrowLeft } from "lucide-react";

import UserWithChatCard from "@/components/messages/sideBarMessages/UserWithChatCard";

import SkeletonUsersWithChat from "./SkeletonUsersWithChat";

const SideBarMessagesContent = () => {
  const { getUsersWithChat, usersWithChat, loading, userChatSugesstions } =
    useMessageStore();

  useEffect(() => {
    getUsersWithChat();
  }, [getUsersWithChat]);

  return (
    <div className="flex h-full flex-col justify-between p-3  overflow-auto">
      <div className="flex flex-col gap-3">
        <Link
          to="/home"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800"
        >
          <CustomIcon icon={ArrowLeft} variant="nohover" />
          <p className="font-poppins text-sm">Página principal</p>
        </Link>

        <div className="flex flex-col gap-3 font-poppins mt-2 w-full">
          <p className="text-xs mb-2">Chats recientes</p>
          {loading.type === "isLoadingUsersWithChat" && loading.isLoading ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 2 }, (_, i) => (
                <SkeletonUsersWithChat key={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {usersWithChat &&
                usersWithChat.map((user, i) => 
                <div key={i}>
                <UserWithChatCard user={user} />
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
                      <UserWithChatCard user={user} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarMessagesContent;
