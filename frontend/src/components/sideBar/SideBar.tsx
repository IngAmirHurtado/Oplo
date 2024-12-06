import SideBarRoutes from "./SideBarRoutes"

const SideBar = () => {
  return (
    <div className='hidden md:block min-w-[250px] h-full overflow-hidden md:bg-background rounded-lg'>
      <SideBarRoutes />
    </div>
  )
}

export default SideBar