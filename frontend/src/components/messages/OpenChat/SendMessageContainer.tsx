import React from "react";

import { useForm } from "react-hook-form";

import { useMessageStore } from "@/store/useMessageStore";

import { Input } from "@/components/ui/input";

import { ImagePlus, Send, X } from "lucide-react";

interface FormData {
  text: string;
}

interface SendMessageContainerProps {
  receivedId: string | null;
}

const SendMessageContainer = (props: SendMessageContainerProps) => {
  const { receivedId } = props;

  const { sendMessage } = useMessageStore();

  const { register, handleSubmit, reset } = useForm<FormData>();

  const [previewImage, setPreviewImage] = React.useState<string | null>(null);

  const onsubmit = (data: FormData) => {

    if(!data.text && !previewImage) return;
    if (!receivedId) {
      return;
    }
    sendMessage({ text: data.text, image: previewImage, receiverId: receivedId });
    setPreviewImage(null);
    reset();
  };

  const onChangeImage = (data : React.ChangeEvent<HTMLInputElement>) => {
      if(data.target.files){
        const file = data.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = async () => {
          const base64 = reader.result;
          setPreviewImage(base64 as string);
        }
      }
  }

  return (
    <div className="w-full flex items-center gap-6 relative">
      {previewImage && (
        <div className="absolute top-[-6rem]">
          <div className="relative">
            <img src={previewImage}  alt="preview" className=" w-[5.5rem] " />
            <button className="absolute top-[-.6rem] right-[-.6rem] bg-destructive rounded-full p-[.2rem]" onClick={() => setPreviewImage(null)}>
              <X className="w-5 h-5" strokeWidth={1} />
            </button>
          </div>
        </div>
      )}
      <form className="w-full relative flex " onSubmit={handleSubmit(onsubmit)}>
        <Input placeholder="Manda un mensaje" {...register("text")} />
        <button type="submit">
          <Send
            className="absolute right-2 top-[.7rem]  cursor-pointer w-5 h-5"
            strokeWidth={1}
          />
        </button>
      </form>

      <form>
        <input className="hidden" type="file" accept="image/*" id="send-image" onChange={onChangeImage}/>
          <label htmlFor="send-image">
            <ImagePlus className="w-8 h-8 cursor-pointer" strokeWidth={1} />
          </label>
      </form>
    </div>
  );
};

export default SendMessageContainer;
