"use client";

import React, { useState } from "react";

import Image from "next/image";
import { Separator } from "../ui/separator";
import SignOut from "../SignOut";
import { ProfileItemProps } from "./ProfileItem.type";

const ProfileItem = (props: ProfileItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = props;

  return (
    <>
      <button
        className="hover:opacity-80 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={user.image}
          alt="user"
          width={30}
          height={30}
          className="rounded-full"
        />
      </button>

      {isOpen && (
        <>
          <div className="flex flex-col gap-4 absolute bottom-[-8rem] right-[2rem] max-sm:right-[1rem] rounded-2xl bg-slate-50 w-80 h-auto  shadow-md p-4">
            <div className="flex gap-2 items-center">
              <Image
                src={user.image}
                alt="user"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-poppins text-black">{user.name}</p>
                <p className="text-xs font-poppins text-gray-400">
                  {user.email}
                </p>
              </div>
            </div>

            <Separator />

            <SignOut />
          </div>
        </>
      )}
    </>
  );
};

export default ProfileItem;
