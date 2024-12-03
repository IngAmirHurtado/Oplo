import { Menu, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { auth } from "@/auth";
import Image from "next/image";
import SideBar from "./SideBar";

const NavBar = async () => {
  const session = await auth();

  return (
    <div className="flex items-center justify-between px-2 gap-x-4 md:px-6 w-full bg-background border-b h-20">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu strokeWidth={1} />
          </SheetTrigger>
         
          <SheetContent side="left">
            
            <SideBar/>
            
          </SheetContent>
          
        </Sheet>
      </div>
      <div className="relative w-[300px]">
        <Input placeholder="Search ..." className="rounded-lg font-montserrat" />
        <SearchIcon strokeWidth={1} className="absolute top-2  right-2" />
      </div>
      <div className="flex gap-x-2 items-center">
        <p>TT</p>
        <button className="hover:opacity-80 transition">
          {session && (
            <Image
              src={session.user.image}
              alt="user"
              width={30}
              height={30}
              className="rounded-full"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
