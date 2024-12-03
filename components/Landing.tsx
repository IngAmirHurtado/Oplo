
import Image from "next/image";
import SignIn from "./SignIn";

const Landing = () => {
  return (
    <div className="flex max-sm:flex-col justify-center items-center w-full h-svh mx-auto max-w-[1000px] gap-8 max-sm:gap-5 px-6 max-sm:px-3">
      <Image src="/landing.svg" alt="logo" width={500} height={500} />
      <div className="flex flex-col gap-4">
        <h1 className="font-poppins font-bold text-5xl">What is Oplo?</h1>
        <p className="font-montserrat mb-2">
          Oplo is an alternative where you can track your company, try it now!
        </p>
        <SignIn />
      </div>
    </div>
  );
};


export default Landing;