import SideBarRoutes from "@/components/sideBar/SideBarRoutes"

const SideBar = () => {
  return (
    <div className='w-full h-full overflow-hidden md:bg-background rounded-lg'>
      <SideBarRoutes />
    </div>
  )
}

export default SideBar