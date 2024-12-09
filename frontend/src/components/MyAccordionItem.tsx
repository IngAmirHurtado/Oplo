import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

const MyAccordionItem = () => {
  return (
   
    <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-poppins">Que es Oplo?</AccordionTrigger>
                <AccordionContent className="font-montserrat text-gray-500">
                  Oplo es una aplicación web donde podrás crear y editar tu usuario, además de buscar y chatear con otros usuarios.
                </AccordionContent>
              </AccordionItem>
    </Accordion>

  )
}

export default MyAccordionItem