

import React from "react";

import { auth } from "@/auth";
import Image from "next/image";
import { Separator } from "./ui/separator";
import SignOut from "./SignOut";

const Profile = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <button className="hover:opacity-80 transition">
        {session && (
          <Image
            src={session.user.image}
            alt="user"
            width={30}
            height={30}
            className="rounded-full"
          />
        )}
      </button>
      <div className="flex flex-col gap-4 absolute bottom-[-8rem] right-[2rem] rounded-2xl bg-slate-50 w-80 h-auto  shadow-md p-4">
        {session && (
          <div className="flex gap-2 items-center">
            <Image
              src={session.user.image}
              alt="user"
              width={36}
              height={36}
              className="rounded-full"
            />

            <div>
              <p className="text-sm font-poppins">{session?.user?.name}</p>
              <p className="text-xs font-poppins text-gray-400">
                {session?.user?.email}
              </p>
            </div>
          </div>
        )}

        <Separator />

        <SignOut />


      </div>
    </>
  );
};

export default Profile;
