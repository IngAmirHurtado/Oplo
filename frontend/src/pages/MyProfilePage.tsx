import NavBar from "@/components/NavBar";
import SideBar from "@/components/sideBar/SideBar";
import UserCardInfo from "@/components/UserCardInfo";
import { CalendarCheck } from "lucide-react";

import { useAuthStore } from "@/store/useAuthStore";

const MyProfilePage = () => {
  const { authUser } = useAuthStore();

  const date = new Date(authUser?.createdAt).toLocaleDateString();

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
            <div className="">
              <div className="flex w-full justify-end items-center gap-2">
                <CalendarCheck className="w-4 h-4" />
                <p className="font-montserrat text-[0.6rem]">
                  {date}
                </p>
              </div>

              <UserCardInfo user={authUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
