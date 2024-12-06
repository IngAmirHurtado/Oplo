import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface CustomIconProps {
  icon: LucideIcon;
  variant: "nohover" | "default" | "destructive" | "outline" | "secondary";
}

const CustomIcon = (props: CustomIconProps) => {
  const { icon: Icon, variant } = props;
  return (
    <Button variant={variant} size="icon">
      <Icon className="absolute h-[1.2rem] w-[1.8rem] transition-all" />
    </Button>
  );
};

export default CustomIcon;
