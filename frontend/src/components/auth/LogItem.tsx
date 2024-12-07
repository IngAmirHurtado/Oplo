import { useEffect } from "react";

import { useAuthStore } from "@/store/useAuthStore";

import { useToast } from "@/hooks/use-toast";

import CustomIcon from "@/components/CustomIcon";

import LogForm from "@/components/auth/LogForm";

import { ToastAction } from "@/components/ui/toast";

import { LogInIcon, AtSign } from "lucide-react";


interface LogItemProps {
  type: string;
}

const LogItem = (props: LogItemProps) => {
  const { type } = props;
  const { error, clearError } = useAuthStore();
  const { toast } = useToast();

  useEffect(() => {
    if (error.type === "auth") {
      toast({
        variant: "destructive",
        title: "Oh oh! Algo salió mal.",
        description: error.message,
        action: <ToastAction altText="Try again">Aceptar</ToastAction>
      });
      clearError();
    }
  }, [error, toast, clearError]);

  return (
    <div className="flex flex-col items-center  justify-center gap-5 w-full md:w-[500px] overflow-scroll md:overflow-hidden  mt-12 md:mt-0">
      <div className="flex flex-col gap-3 items-center">
        <CustomIcon icon={type === "login" ? LogInIcon : AtSign} variant="outline"/>
        <h1 className="font-poppins text-2xl ">
          {type === "login" ? "Ingresa con tus datos" : "Crea tu cuenta"}
        </h1>
      </div>
      <LogForm type={type} />
    </div>
  );
};

export default LogItem;
