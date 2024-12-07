import SideBarRoutes from "@/components/sideBar/SideBarRoutes";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";


const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet >
        <SheetTrigger>
          <Menu strokeWidth={1} className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left" >
          <SheetHeader>
            <SheetDescription className="h-screen">
              <SideBarRoutes />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
