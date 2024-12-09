import { formatDate } from "@/lib/utils";

interface MessageItemProps {
  site: string;
  createdAt: string;
  image: string;
  text: string;
}

const MessageItem = (props: MessageItemProps) => {
  
  const { site, createdAt, image, text } = props;
  return (
    <div
      className={`flex flex-col w-full gap-[0.1rem] ${
        site === "end" ? "items-end" : "items-start"
      }`}
    >
      <p className="font-montserrat text-xs text-gray-500 ">
        {formatDate(createdAt)}
      </p>
      <div className="flex flex-col bg-muted py-2 px-4 rounded-lg gap-2">
        {image && (
          <img
            src={image}
            alt="message"
            className="w-40 h-40 object-cover rounded-lg"
          />
        )}
        <p className="font-montserrat text-sm">{text}</p>
      </div>
    </div>
  );
};

export default MessageItem;
