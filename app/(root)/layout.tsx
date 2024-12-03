import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import React from "react";


export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <main className="flex w-full h-full">
      <div className="hidden xl:block w-80 h-full xl:fixed">
        <SideBar />
      </div>
      <div className="w-full xl:ml-80">
        <NavBar/>
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
          {children}
        </div>
      </div>
    </main>
  );
}
