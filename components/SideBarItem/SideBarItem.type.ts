import { LucideIcon } from "lucide-react";


export type SideBarItemProps = {
    item: {
        icon: LucideIcon;
        label: string;
        href: string;
    },
    key: string;
    
};