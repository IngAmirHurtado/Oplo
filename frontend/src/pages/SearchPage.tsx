import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/useAuthStore";

import { useMessageStore } from "@/store/useMessageStore";

import NavBar from "@/components/navBar/NavBar";
import SideBar from "@/components/sideBar/SideBar";

import { Loader } from "lucide-react";
import ChatCard from "@/components/messages/chatsContainer/ChatCard";

const SearchPage = () => {
  const query = useParams<{ id: string }>().id;

  const { loading, getSearchResults, searchResults } = useAuthStore();

  const  {userChatSelected} = useMessageStore();

  const navigate = useNavigate();

  useEffect(() => {
    if(userChatSelected) {
      navigate("/messages");
    }
  }, [userChatSelected, navigate])

  useEffect(() => {
    if (query) getSearchResults(query);
  }, [getSearchResults, query]);

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden bg-muted ">
      <NavBar />

      <div className="w-full lg:w-[1100px]  mt-16 h-full flex gap-3 ">
        <div className="min-w-[250px]  py-3 hidden md:block ">
          <SideBar />
        </div>
        <div className="md:py-3 w-full max-h-full overflow-hidden flex-grow">
          {/* Este div es el que manejará el scroll */}
          <div className="bg-background h-full rounded-lg p-3 overflow-auto max-h-[calc(100vh-88px)]">
            {loading.type === "search" && loading.isLoading ? (
              <div className="flex items-center justify-center h-screen">
              <Loader
                className="w-10 h-10 animate-spin"
                stroke="#0AFFD6"
                strokeWidth={1}
              />
            </div>
            ) : searchResults && searchResults.length === 0 ? (
              <p className="font-poppins text-xs">No hay resultados</p>
            ) : (
              <div className="flex flex-col gap-3">
                <p className="font-poppins text-xs">Resultados</p>
                <div className="flex flex-col gap-2">
                  {searchResults && searchResults.map((user) => (
                    <ChatCard key={user._id} user={user} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
