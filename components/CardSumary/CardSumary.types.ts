import { LucideIcon } from "lucide-react";

export type CardSumaryProps = {
    icon: LucideIcon;
    total: string;
    average: number;
    title: string;
    tooltipText: string;
}