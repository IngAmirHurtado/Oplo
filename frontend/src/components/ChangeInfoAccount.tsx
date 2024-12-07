import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"

import { useAuthStore } from "@/store/useAuthStore"

interface ChangeInfoAccountProps {
    setIsEditing: (value: boolean) => void
}

const ChangeInfoAccount = (props: ChangeInfoAccountProps) => {
    const { authUser } = useAuthStore()
    const { setIsEditing } = props
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
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name" className="font-poppins">Username</Label>
              <Input id="text" defaultValue={authUser?.username} className="font-montserrat"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username" className="font-poppins">Email</Label>
              <Input id="username" type="email" defaultValue={authUser?.email} className="font-montserrat"/>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="font-montserrat">Guardar cambios</Button>
            <Button variant="destructive" className="font-montserrat" onClick={() => setIsEditing(false)}>Cancelar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
    </Tabs>
  )
}

export default ChangeInfoAccount

