

import Image from "next/image";


const Logo = () => {
  return (
    <div
      className=" px-2 md:px-6 pb-4 md:pb-0 md:pt-6 cursor-pointer"
    
    >
      <Image src="/logo.svg" alt="logo" width={35} height={35} priority />
    </div>
  );
};

export default Logo;
