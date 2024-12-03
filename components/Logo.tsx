import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex gap-2 items-center px-2 md:px-6 pb-4 md-pb-0 md:pt-6" href="/">
      <Image src="/logo.svg" alt="logo" width={35} height={35} />
      <p className="font-montserrat font-bold">Oplo</p>
    </Link>
  );
};

export default Logo;
