import { Button } from "./ui/button";

import { useGeneralStore } from "@/store/useGeneral";

interface WelcomePanelProps {
  isMobile: boolean | null;
}

const WelcomePanel = (props: WelcomePanelProps) => {
  const {  isMobile } = props;
  const { stepCheckMobile, setStepCheckMobile } = useGeneralStore();

  return (
    <div className="grid h-full grid-row-1 md:grid-row-2  mt-12 md:mt- font-poppins p-1 ">

      <div className="p-1 flex flex-col gap-5 items-center justify-center  mt-8 sm:mt-0">
        {isMobile && (
          <p className="text-center  text-2xl ">
            Conoce personas y comparte tus intereses.
          </p>
        )}
      
          <img src="/imgs/welcome-panel.svg" alt="welcome-panel"  />
    

        {!stepCheckMobile && isMobile && (
        <Button
          className=" w-full mt-5 "
          onClick={() => setStepCheckMobile && setStepCheckMobile() }
        >
          Empieza ya!
        </Button>
      )}
      </div>

    </div>
  );
};

export default WelcomePanel;
