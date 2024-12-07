import { Separator } from "@/components/ui/separator";
import { User } from "@/store/useAuthStore";
import { UserPen } from "lucide-react";
import CustomIcon from "./CustomIcon";

interface UserCardInfoProps {
  user: User | null;
  isMyProfile: boolean;
    setIsEditing?: (value: boolean) => void;
}

const UserCardInfo = (props: UserCardInfoProps) => {
  const { user, isMyProfile, setIsEditing } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <div className="flex flex-col gap-7 items-center">
        <img
          src={`${user?.profilePic === "" ? "/imgs/default-user.svg" : ""}`}
          className="h-24 w-24"
        />
        <div className="flex flex-col items-center">
          <p className="font-montserrat">@{user?.username}</p>

          <p className="text-slate-500 font-montserrat text-[0.8rem]">
            {user?.email}
          </p>
        </div>
      </div>
      <div className="w-full relative mt-6">
        <Separator />
        {isMyProfile && (
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  hover:text-slate-500 trasnsition" 
          onClick={() => setIsEditing && setIsEditing(true)}>
            <CustomIcon icon={UserPen} variant="nohover" />
          </div>
        )}
      </div>

      <div className="flex justify-center gap-16 md:gap-20  w-full font-poppins ">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-8 h-8 grid place-items-center bg-primary rounded-lg">
            <p className="text-muted "> {user?.followers?.length}</p>
          </div>
          <p className="text-xs text-slate-500">Followers</p>
        </div>
        <div className="flex flex-col gap-1  items-center">
          <div className="w-8 h-8 grid place-items-center bg-primary rounded-lg">
            <p className="text-muted "> {user?.following?.length}</p>
          </div>
          <p className="text-xs text-slate-500">Following</p>
        </div>
      </div>
    </div>
  );
};

export default UserCardInfo;
