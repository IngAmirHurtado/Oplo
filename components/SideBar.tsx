

import React from 'react'
import SideBarRoutes from './SideBarRoutes/SideBarRoutes'
import Logo from './Logo'

const SideBar = () => {
  return (
    <div className='flex flex-col h-full '>
       <Logo />
        <SideBarRoutes />
    </div>
  )
}

export default SideBar