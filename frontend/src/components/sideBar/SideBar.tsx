import SideBarRoutes from "./SideBarRoutes"

const SideBar = () => {
  return (
    <div className='w-full h-full overflow-hidden md:bg-background rounded-lg'>
      <SideBarRoutes />
    </div>
  )
}

export default SideBar