
import  SiderBarItem  from "@/components/sideBar/SiderBarItem";

import UserCardSideBarItem from "@/components/sideBar/UserCardSideBarItem";

import { dataGeneralSideBar, dataSupportSideBar } from "./SideBarRotes.data";

const SideBarRoutes = () => {

  return (
    <div className="flex max-sm:h-screen gap-10  h-full flex-col justify-between p-3">

      <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <p className="font-montserrat text-xs">General</p>
        <div className="flex flex-col gap-3 font-poppins">
       
          {dataGeneralSideBar.map((item, index) => (
            <SiderBarItem
              icon={item.icon}
              title={item.title}
              href={item.href}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-montserrat text-xs">Soporte</p>
        <div className="flex flex-col gap-3 font-poppins">
       
          {dataSupportSideBar.map((item, index) => (
            <SiderBarItem
              icon={item.icon}
              title={item.title}
              href={item.href}
              key={index}
            />
          ))}
        </div>
      </div>
      </div>

     
      <UserCardSideBarItem />
    
    </div>
  );
};

export default SideBarRoutes;
