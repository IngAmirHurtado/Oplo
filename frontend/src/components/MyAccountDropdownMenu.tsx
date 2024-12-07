import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/useAuthStore";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import UserCardSideBarItem from "@/components/UserCardSideBarItem";

import CustomIcon from "@/components/CustomIcon";

import { LogOut, User } from "lucide-react";

interface MyAccountDropdownMenuProps {
  site: string;
}

const MyAccountDropdownMenu = (props: MyAccountDropdownMenuProps) => {
  const { site } = props;
  const { authUser, logOutRequest } = useAuthStore();

  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {site === "navbar" ? (
          <img
            src={`${
              authUser?.profilePic === "" ? "/imgs/default-user.svg" : ""
            }`}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <UserCardSideBarItem />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <p className="font-montserrat">Mi cuenta</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex gap-3 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <CustomIcon icon={User} variant={"nohover"} />
          <p className="font-poppins">Ir al perfil</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-3 cursor-pointer"
          onClick={() => {
            logOutRequest();
          }}
        >
          <CustomIcon icon={LogOut} variant={"destructive"} />
          <p className="font-poppins">Salir</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyAccountDropdownMenu;
