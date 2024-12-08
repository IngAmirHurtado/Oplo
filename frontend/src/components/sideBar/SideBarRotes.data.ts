import { Bell, House, MessageSquare, Telescope, User } from "lucide-react";

export const dataGeneralSideBar = [
    {
        title: 'Principal',
        icon: House,
        href: '/'
    },
    {
        title: 'Perfil',
        icon: User,
        href: '/profile'
    },
    {
        title: 'Mensajes',
        icon: MessageSquare,
        href: '/messages'
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
    
]