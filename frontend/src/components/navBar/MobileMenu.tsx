import SideBarRoutes from "@/components/sideBar/SideBarRoutes";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBarMessagesContent from "@/components/messages/sideBarMessages/SideBarMessagesContent";

interface MobileMenuProps {
  messagePage?: boolean;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { messagePage } = props;
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu strokeWidth={1} className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="h-screen" >
            {messagePage ? <SideBarMessagesContent /> : <SideBarRoutes />}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
