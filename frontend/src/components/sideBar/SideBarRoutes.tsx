import { dataGeneralSideBar } from "./SideBarRotes.data";
import { SiderItem } from "./SiderItem";

import { useAuthStore } from "@/store/useAuthStore";

const SideBarRoutes = () => {
  const { authUser } = useAuthStore();

  return (
    <div className="flex h-full flex-col justify-between p-3">
      <div className="flex flex-col gap-3">
        <p className="font-montserrat text-xs">General</p>
        <div className="flex flex-col gap-2 font-poppins">
          {dataGeneralSideBar.map((item, index) => (
            <SiderItem
              icon={item.icon}
              title={item.title}
              href={item.href}
              key={index}
            />
          ))}
        </div>
      </div>

     
        <button className="bg-muted p-2 rounded-lg flex gap-2 max-sm:pb-10  border-none text-left">
          <img src="/imgs/default-user.svg" className="h-9 w-9" />
          <div className="flex flex-col justify-center overflow-hidden">
            <p className="font-poppins text-[0.7rem] truncate w-full overflow-hidden whitespace-nowrap text-ellipsis">
              {authUser?.email}
            </p>
            <p className="font-montserrat text-xs text-gray-500 truncate w-36 overflow-hidden whitespace-nowrap text-ellipsis">
              {authUser?.username}
            </p>
          </div>
        </button>
    
    </div>
  );
};

export default SideBarRoutes;
