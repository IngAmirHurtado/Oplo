import { useMessageStore } from "@/store/useMessageStore";

import NavBar from "@/components/navBar/NavBar";
import SideBar from "@/components/sideBar/SideBar";
import TopOpenChat from "@/components/messages/OpenChat/TopOpenChat";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HelpPage = () => {
  const { userChatSelected } = useMessageStore();

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden bg-muted ">
      <div className="md:hidden w-full h-0">
        {userChatSelected ? <TopOpenChat /> : <NavBar />}
      </div>

      <div className="hidden md:block">
        <NavBar />
      </div>

      <div className="w-full lg:w-[1100px] mt-16 h-full flex gap-3 ">
        <div className="min-w-[250px]  py-3 hidden md:block ">
          <SideBar />
        </div>
        <div className="md:py-3 w-full max-h-full overflow-hidden">
          <div className="bg-background h-full rounded-lg p-3 overflow-auto max-h-[calc(100vh-88px)] relative">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-poppins">
                  ¿Qué es Oplo?
                </AccordionTrigger>
                <AccordionContent className="font-montserrat text-gray-500">
                  Oplo es una aplicación web donde podrás crear y editar tu
                  usuario, además de buscar y chatear con otros usuarios.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-poppins">
                  ¿Qué fines tenemos?
                </AccordionTrigger>
                <AccordionContent className="font-montserrat text-gray-500">
                  Oplo ofrece una alternativa para comunicarte con tus amigos y
                  familiares de manera segura y privada, con mensajes e imagenes, además podrás ver si
                  estan <span className="text-primary"> online</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-poppins">
                  ¿Quién hizo Oplo?
                </AccordionTrigger>
                <AccordionContent className="font-montserrat text-gray-500">
                  Oplo fue desarrollado por Amir Hurtado. V1 publicada el 09/12/2024.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-poppins">
                  ¿Planes a futuro?
                </AccordionTrigger>
                <AccordionContent className="font-montserrat text-gray-500">
                  Se pretende que en Oplo cada usuario pueda tener seguidores y seguidos, ademas de una pagina principal donde se muestren las publicaciones de los usuarios que sigues.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
