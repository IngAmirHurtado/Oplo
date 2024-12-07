import { useEffect } from "react";

import { useAuthStore } from "@/store/useAuthStore";

import { useForm } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { ToastAction } from "@/components/ui/toast";

import { Loader } from "lucide-react";

interface ChangeInfoAccountProps {
  setIsEditing: (value: boolean) => void;
}

interface DataForm {
  username: string;
  email: string;
}

const ChangeInfoAccount = (props: ChangeInfoAccountProps) => {
  const { authUser, changeGeneralInfo, loading, error, clearError } =
    useAuthStore();
  const { setIsEditing } = props;
  const { register, handleSubmit } = useForm<DataForm>();
  const { toast } = useToast();

  const onSubmit = async (data: DataForm) => {
    await changeGeneralInfo(data);
    setIsEditing(false);
  };

  useEffect(() => {
    if (error.type === "changeInfo") {
      toast({
        variant: "destructive",
        title: "Oh oh! Algo salió mal.",
        description: error.message,
        action: <ToastAction altText="Try again">Aceptar</ToastAction>,
      });
      clearError();
    }
  }, [error, toast, clearError]);

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle className="font-poppins">Cuenta</CardTitle>
            <CardDescription className="font-montserrat">
              Aquí puedes cambiar la informacion general de tu cuenta.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username" className="font-poppins">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue={authUser?.username}
                  className="font-montserrat"
                  {...register("username", { required: true })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="font-poppins">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={authUser?.email}
                  className="font-montserrat"
                  {...register("email", { required: true })}
                />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="font-montserrat" type="submit">
                {loading.type === "changingInfo" && loading.isLoading ? (
                  <div className="flex items-center justify-center w-full">
                    <Loader
                      className=" animate-spin "
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </div>
                ) : (
                  "Guardar cambios"
                )}
              </Button>
              <Button
                variant="destructive"
                className="font-montserrat"
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ChangeInfoAccount;
