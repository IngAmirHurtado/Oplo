"use client";

import { cn } from "@/lib/utils";
import { SideBarItemProps } from "./SideBarItem.type"
import Link from 'next/link'
import { usePathname } from "next/navigation";

const SideBarItem = (props: SideBarItemProps) => {
    const { item } = props;
    const { icon : Icon, label, href } = item;
    const pathname = usePathname();

    const isActive = pathname === href;

  return (
    <Link href={href} className={cn(`flex gap-x-2 mt-2 light:text-black dark:text-white text-sm items-center hover:bg-300/20 p-2 rounde-lg cursor-pointer`, isActive && 'bg-slate-400/20 rounded-sm')} >
        <Icon className="w-5 h-5" strokeWidth={1}/>
        <span className="font-poppins">{label}</span>
    </Link>
  )
}

export default SideBarItem