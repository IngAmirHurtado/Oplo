import React from "react";

import { auth } from "@/auth";
import ProfileItem from "./ProfileItem/ProfileItem";

const Profile = async () => {
  const session = await auth();

  console.log(session);
  return <>{session && <ProfileItem user={session.user} />}</>;
};

export default Profile;
