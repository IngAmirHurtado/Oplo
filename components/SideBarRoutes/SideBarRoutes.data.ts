import { BarChart4, Building2, PanelsTopLeft, Settings, ShieldCheck, CircleHelpIcon, Calendar } from "lucide-react"


export const dataGeneralSidebar = [
    {
        label: 'Dashboard',
        icon: PanelsTopLeft,
        href: '/'
    },
    {
        label: 'Companies',
        icon: Building2,
        href: '/companies'
    },
    {
        label: 'Calendar',
        icon: Calendar,
        href: '/calendar'
    },
   
]


export const dataToolsSidebar = [
    {
        label: 'Faqs',
        icon: CircleHelpIcon,
        href: '/faqs'
    },
    {
        label: 'Analytics',
        icon: BarChart4,
        href: '/analytics'
    },
    
]


export const dataSupportSidebar = [
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings'
    },
    {
        label: 'Support',
        icon: ShieldCheck,
        href: '/support'
    },
]