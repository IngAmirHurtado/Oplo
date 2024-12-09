import { useNavigate } from "react-router-dom";

import {useForm} from "react-hook-form";

import { Input } from "@/components/ui/input";

import { ModeToggle } from "@/components/theme/mode-toggle";

import MobileMenu from "@/components/navBar/MobileMenu";

import MyAccountDropdownMenu from "@/components/navBar/MyAccountDropdownMenu";

import { Search } from "lucide-react";

interface FormValues {
  query: string;
}

const NavBar = () => {

  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
      navigate(`/search/${data.query}`);
  }


  return (
    <div className="h-18 md:h-14 flex w-full justify-center items-center p-3 fixed top-0 left-0 z-10 bg-background">
      <div className="w-full lg:w-[1100px]  flex justify-between">
        <div className="hidden md:flex gap-2 items-center min-w-[260px]  ">
          <img src="/imgs/logo.svg" className="h-8 w-8"></img>
          <p className=" font-montserrat hidden sm:block">Oplo</p>
        </div>

        <div className=" w-full flex gap-2 items-center">
        
            <MobileMenu />
       
          
          <form className="relative w-10/12 md:w-9/12" onSubmit={handleSubmit(onSubmit)}>
            <Search
              strokeWidth={1}
              className="w-5 h-5 absolute top-[.6rem] left-[.8rem]"
            />
            <Input placeholder="Buscar" className="pl-12" {...register("query", {required:true})}/>
          </form>
        </div>

        <div className="w-[100px] md:w-[450px] flex justify-end items-center gap-2 ">
          <ModeToggle />
          <MyAccountDropdownMenu  />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
