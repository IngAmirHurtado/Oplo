import NavBar from "@/components/NavBar";
import SideBar from "@/components/sideBar/SideBar";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden bg-muted ">
      <NavBar />
      <div className="w-full lg:w-[1100px]  mt-16 h-full flex gap-3 ">
        <div className="min-w-[250px]  py-3 hidden md:block ">
          <SideBar />
        </div>
        <div className="pt-3  w-full">
          <div className="bg-background h-full rounded-lg p-3">
             <h1>HOLAAA</h1>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default HomePage;
