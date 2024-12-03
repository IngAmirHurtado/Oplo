import { cn } from "@/lib/utils";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import { CardSumaryProps } from "./CardSumary.types";
import { MoveDownRight, MoveUpRight, TrendingUp } from "lucide-react";

const CardSumary = (props: CardSumaryProps) => {
  const { icon: Icon, total, average, title, tooltipText } = props;

  return (
    
    <div className="shadow-sm bg-background rounded-lg px-5 py-3 hover:shadow-lg transition">
    
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <CustomIcon icon={Icon} />
          <p className="font-poppins">{title}</p>
        </div>
        <CustomToolTip content={tooltipText} />
      </div>
      <div className="flex gap-4 mt-2 md:mt-4">
        <p className="text-md font-montserrat">{total}</p>
        <div className={cn(`flex items-center gap-1 px-2 text-xs text-white rounded-lg h-[20px] bg-black dark:bg-secondary`)}>
          <p className="font-montserrat">{average}%</p>

          {average < 20 && (
           <MoveDownRight strokeWidth={2} className="w-4 h-4" />
          )}
          {average >= 20 && average < 70 && (
            <MoveUpRight strokeWidth={2} className="w-4 h-4" />
          )}
          {average >= 70 && average < 100 && (
            <TrendingUp strokeWidth={2} className="w-4 h-4" />
          )}
        </div>
      </div>
     
    </div>
  );
};

export default CardSumary;
