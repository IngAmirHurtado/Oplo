import { LucideIcon } from "lucide-react";

interface CustomIconProps{
  icon: LucideIcon;
};

const CustomIcon = (props: CustomIconProps) => {
  const { icon: Icon } = props;
  return (
    <div className="bg-slate-200 text-black  p-2 rounded-lg cursor-pointer max-w-max">
      <Icon strokeWidth={1.5} className="w-5 h-5 " />
    </div>
  );
};

export default CustomIcon;
 