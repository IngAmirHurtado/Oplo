import NavBar from "@/components/NavBar";
import SideBar from "@/components/sideBar/SideBar";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-full mt-16 bg-muted h-full flex justify-center">
        <div className=" w-full lg:w-[1100px]  flex py-3">
          <SideBar /> 
        </div>
    
      </div>
    </div>
  );
};

export default HomePage;
