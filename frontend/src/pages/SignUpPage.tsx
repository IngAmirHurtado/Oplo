

import LogItem from "@/components/auth/LogItem";
import { ModeToggle } from "@/components/theme/mode-toggle";
import WelcomePanel from "@/components/WelcomePanel";

const SignUp = () => {
  
  return (
    <div className="h-full  justify-between flex flex-col p-3 md:p-4  w-screen ">
      {/* Encabezado */}
      <div className="flex justify-between itemn-center">
        <img src="/imgs/logo.svg" alt="logo" className={`w-14 h-14`} />
          <div className="">
            <ModeToggle />
          </div>
      </div>
 
      <div
        className="flex items-center justify-center w-full overflow-hidden h-full gap-6"
      >
  
        <div className="hidden lg:flex  lg:items-center justify-center g-6 ">
          <WelcomePanel
            isMobile={null}
          />
        </div>
        <LogItem type="signup"/>
      </div>
    </div>
  );
}

export default SignUp