import { Menu, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SideBar from "./SideBar";
import { ModeToggle } from "./ToggleTheme";
import Profile from "./Profile";

const NavBar = async () => {
  return (
    <nav className="flex items-center justify-between px-2 gap-x-4 md:px-6 w-full bg-background border-b h-20 relative">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu strokeWidth={1} />
          </SheetTrigger>

          <SheetContent side="left">
            <SideBar />
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative w-[300px]">
        <Input
          placeholder="Search ..."
          className="rounded-lg font-montserrat"
        />
        <SearchIcon strokeWidth={1} className="absolute top-2  right-2" />
      </div>
      <div className="flex gap-x-2 items-center">
        <ModeToggle />
        <Profile />
      </div>
    </nav>
  );
};

export default NavBar;
