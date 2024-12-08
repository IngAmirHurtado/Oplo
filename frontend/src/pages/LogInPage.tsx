import { useGeneralStore } from "../store/useGeneral";

import { ModeToggle } from "@/components/theme/mode-toggle";
import WelcomePanel from "@/components/auth/WelcomePanel";

import { isMobile } from "react-device-detect";
import LogItem from "@/components/auth/LogItem";



const LogInPage = () => {
  const { stepCheckMobile } = useGeneralStore();
 


  return (
    <div className="h-full  justify-between flex flex-col p-3 md:p-4  w-screen ">
      <div className="flex justify-between itemmscenter">
        <img src="/imgs/logo.svg" alt="logo" className={`w-8 h-8`} />
        <div className="">
          <ModeToggle />
        </div>
      </div>

      {!stepCheckMobile && isMobile && (
        <WelcomePanel
          
          isMobile={isMobile}
        />
      )}

      <div
        className={`${
          isMobile && !stepCheckMobile ? "hidden" : ""
        }   flex items-center justify-center w-full overflow-hidden h-full gap-6`}
      >
        <LogItem type="login" />

        <div className="hidden lg:flex  lg:items-center justify-center ">
          <WelcomePanel isMobile={null} />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
