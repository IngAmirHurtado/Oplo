import { Bell, House, MessageSquare, Telescope } from "lucide-react";

export const dataGeneralSideBar = [
    {
        title: 'Principal',
        icon: House,
        href: '/'
    },
    {
        title: 'Explorar',
        icon: Telescope,
        href: '/search/?q='
    },
    {
        title: 'Notificaciones',
        icon: Bell,
        href: '/notifications'
    }, 
    {
        title: 'Mensajes',
        icon: MessageSquare,
        href: '/messages'
    }
]