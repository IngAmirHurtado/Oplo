import {useForm} from "react-hook-form"

import { useMessageStore } from "@/store/useMessageStore"

import { Input } from "@/components/ui/input"

import { ImagePlus, Send } from "lucide-react"

interface FormData {
  text: string
}

interface SendMessageContainerProps {
  receivedId: string | null
}

const SendMessageContainer = (props: SendMessageContainerProps) => {

  const { receivedId } = props;

  const { sendMessage } = useMessageStore()


  const { register, handleSubmit, reset } = useForm<FormData>()

  const onsubmit = (data: FormData) => {
    if (!receivedId) {
      return;
    }
    sendMessage({ text: data.text, receiverId: receivedId });
    reset();
  }



  return (
    <div className="w-full flex items-center gap-6">
      <form className="w-full relative flex " onSubmit={handleSubmit(onsubmit)}>
         <Input placeholder='Manda un mensaje' {...register("text")}/>
         <button type="submit">
         <Send className="absolute right-2 top-[.5rem]  cursor-pointer" strokeWidth={1} />
          </button>
      </form>
   
        <ImagePlus className="w-8 h-8 cursor-pointer" strokeWidth={1} />
  
      
       
    </div>
  )
}

export default SendMessageContainer