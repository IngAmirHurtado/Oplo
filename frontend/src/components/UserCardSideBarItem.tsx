import { useAuthStore } from "@/store/useAuthStore";
import { useGeneralStore } from "@/store/useGeneral";

const UserCardSideBarItem = () => {
  const { authUser } = useAuthStore();
  const { previewProfilePic } = useGeneralStore();

  return (
    <div className="bg-muted p-2 rounded-lg flex gap-2 max-sm:pb-10  border-none text-left hover:scale-[1.03] transition">
      <img src={`${previewProfilePic ? previewProfilePic : (authUser?.profilePic === "" ? "/imgs/default-user.svg"  : authUser?.profilePic )}` } className="h-9 w-9 rounded-full" />
      <div className="flex flex-col justify-center overflow-hidden">
        <p className="font-poppins text-xs truncate w-full overflow-hidden whitespace-nowrap text-ellipsis text-black dark:text-white">
          {authUser?.email}
        </p>
        <p className="font-montserrat text-xs text-gray-500 truncate w-36 overflow-hidden whitespace-nowrap text-ellipsis">
          @{authUser?.username}
        </p>
      </div>
    </div>
  );
};

export default UserCardSideBarItem;
