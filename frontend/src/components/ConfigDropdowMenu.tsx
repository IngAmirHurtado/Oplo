

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
    DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CustomIcon from "./CustomIcon";
import { Bolt } from "lucide-react";






const ConfigDropdowMenu = () => {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
         
      <CustomIcon icon={Bolt} variant="outline" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <p className="font-montserrat">Configuración</p>
        </DropdownMenuLabel >
        <DropdownMenuSeparator  />
        <DropdownMenuItem className="fle gap-3">
            
            
        </DropdownMenuItem>
        
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConfigDropdowMenu;
