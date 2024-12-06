import { LucideIcon } from 'lucide-react';
import {Link} from 'react-router-dom';
import CustomIcon from '../CustomIcon';

interface SiderItemProps {
    title: string;
    icon: LucideIcon;
    href: string;
}

export const SiderItem = (props : SiderItemProps) => {
 const { title, icon : Icon, href } = props;

  return (
    <Link to={href}>
      <div className='flex items-center gap-2 text-gray-500 hover:text-gray-800'>
        <CustomIcon icon={Icon} variant={"nohover"} />
        <span className='text-sm'>{title}</span>
      </div>
    </Link>
  )
}
