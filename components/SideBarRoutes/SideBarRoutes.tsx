"use client"

import SideBarItem from "../SideBarItem/SideBarItem";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  dataGeneralSidebar,
  dataToolsSidebar,
  dataSupportSidebar,
} from "./SideBarRoutes.data";

const SideBarRoutes = () => {

  return (
    <div className="flex flex-col justify-between h-screen">

    
      <div className="p-2 md:p-4">
        <p className="font-montserrat">General</p>

        {dataGeneralSidebar.map((item) => (
          <SideBarItem item={item} key={item.label} />
        ))}
      </div>

      <Separator />

      <div className="p-2 md:p-4">
        <p className="font-montserrat">Support</p>
        {dataSupportSidebar.map((item) => (
          <SideBarItem item={item} key={item.label} />
        ))}
      </div>

      <Separator />

      <div className="p-2 md:p-4">
        <p className="font-montserrat">Tools</p>
        {dataToolsSidebar.map((item) => (
          <SideBarItem item={item} key={item.label} />
        ))}
      </div>

     

        <div className="text-center p-4">
          <Button variant="outline" className="w-full font-montserrat">
            Upgrade plan
          </Button>
        </div>

       
      </div>
   
  );
};

export default SideBarRoutes;
