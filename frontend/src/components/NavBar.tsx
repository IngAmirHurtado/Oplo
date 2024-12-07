import { Input } from "@/components/ui/input";

import { ModeToggle } from "@/components/theme/mode-toggle";

import MobileMenu from "@/components/MobileMenu";

import MyAccountDropdownMenu from "@/components/MyAccountDropdownMenu";

import { Search } from "lucide-react";

const NavBar = () => {
  return (
    <div className="h-18 md:h-14 flex w-full justify-center items-center p-3 fixed top-0 left-0 z-10 bg-background">
      <div className="w-full lg:w-[1100px]  flex justify-between">
        <div className="hidden md:flex gap-2 items-center min-w-[260px]  ">
          <img src="/imgs/logo.svg" className="h-8 w-8"></img>
          <p className=" font-montserrat hidden sm:block">Oplo</p>
        </div>

        <div className=" w-full flex gap-2 items-center">
          <MobileMenu />
          <div className="relative w-10/12 md:w-9/12">
            <Search
              strokeWidth={1}
              className="w-5 h-5 absolute top-[.6rem] left-[.8rem]"
            />
            <Input placeholder="Buscar" className="pl-12" />
          </div>
        </div>

        <div className="w-[100px] md:w-[450px] flex justify-end items-center gap-2 ">
          <ModeToggle />
          <MyAccountDropdownMenu site="navbar" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
