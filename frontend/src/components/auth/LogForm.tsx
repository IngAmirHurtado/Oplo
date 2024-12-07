import { useState } from "react";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useAuthStore } from "@/store/useAuthStore";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Lock, Mail, Eye, EyeOff, User, Loader } from "lucide-react";

interface LogFormProps {
  type: string;
}

interface LogDataForm {
  username: string;
  email?: string;
  password: string;
}

const LogForm = (props: LogFormProps) => {
  const { type } = props;
  const { logInRequest, signUpRequest, loading } = useAuthStore();

  const { register, handleSubmit } = useForm<LogDataForm>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LogDataForm) => {
    if (type === "login") {
      logInRequest(data);
    } else {
      signUpRequest(data);
    }
  };

  return (
    <form
      className="mt-6 w-full md:max-w-full md:w-[30rem] max-h-full flex flex-col gap-5 overflow-hidden  p-1 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <p className="font-poppins pb-2 text-sm">Nombre de usuario</p>
        <div className="relative">
          <User
            strokeWidth={1}
            className="absolute top-[.7rem] left-3 w-5 h-5  text-slate-400"
          />
          <Input
            placeholder="username"
            className="font-montserrat pl-12"
            type={"text"}
            {...register("username", { required: true })}
          />
        </div>
      </div>

      {type === "signup" && (
        <div>
          <p className="font-poppins pb-2 text-sm">Email</p>
          <div className="relative">
            <Mail
              strokeWidth={1}
              className="absolute top-[.7rem] left-3 w-5 h-5  text-slate-400"
            />
            <Input
              placeholder="tu@ejemplo.com"
              className="font-montserrat pl-12"
              type={"email"}
              {...register("email", { required: true })}
            />
          </div>
        </div>
      )}
      <div>
        <p className="font-poppins pb-2 text-sm">Contraseña</p>
        <div className="relative">
          <Lock
            strokeWidth={1}
            className="absolute top-[.7rem] left-3 w-5 h-5 text-slate-400"
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Min. 6 caracteres"
            className="font-montserrat pl-12 "
            {...register("password", { required: true, minLength: 6 })}
          />
          {!showPassword ? (
            <EyeOff
              strokeWidth={1}
              className="absolute top-[.5rem] right-2 w-6 h-6 text-slate-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <Eye
              strokeWidth={1}
              className="absolute top-[.5rem] right-2 w-6 h-6 text-slate-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>
      <Button type="submit" className="mt-7 font-montserrat">
        {loading.type === "log" && loading.isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Loader
              className=" animate-spin"
              stroke="currentColor"
              strokeWidth={2}
            />
          </div>
        ) : type === "login" ? (
          "Ingresar"
        ) : (
          "Registrarse"
        )}
      </Button>

      <p className="text-center font-montserrat text-sm">
        {type === "login" ? "No" : "Ya"} tienes cuenta?{" "}
        <span>
          <Link
            to={type === "login" ? "/signup" : "/"}
            className="text-primary underline"
          >
            {type === "login" ? "Regístrate" : "Ingresar"}
          </Link>
        </span>
      </p>
    </form>
  );
};

export default LogForm;
