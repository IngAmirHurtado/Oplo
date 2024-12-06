import CustomIcon from "../CustomIcon";
import LogForm from "./LogForm";

import { LogInIcon, AtSign } from "lucide-react";


interface LogItemProps {
  type: string;
}

const LogItem = (props: LogItemProps) => {
  const { type } = props;

  return (
    <div className="flex flex-col items-center  justify-center gap-5 w-full md:w-[500px] overflow-scroll md:overflow-hidden  mt-4 md:mt-0">
      <div className="flex flex-col gap-3 items-center">
        <CustomIcon icon={type === "login" ? LogInIcon : AtSign} />
        <h1 className="font-poppins text-2xl ">{type === "login" ? "Ingresa con tus datos" : "Crea tu cuenta" }</h1>
      </div>
      <LogForm type={type} />
      
    </div>
  );
};

export default LogItem;
