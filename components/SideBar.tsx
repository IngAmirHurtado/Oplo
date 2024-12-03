import React from 'react'
import SideBarRoutes from './SideBarRoutes/SideBarRoutes'

const SideBar = () => {
  return (
    <div className='flex flex-col h-full '>
        <div className=' px-2 md:px-6 pb-4 md-pb-0 md:pt-6 '>
            <h1>Logo</h1>
        </div>
        
        <SideBarRoutes />
    </div>
  )
}

export default SideBar