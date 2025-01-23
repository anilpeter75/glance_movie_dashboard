import React from "react";
import notification from "@/assets/notification.svg";
import drawer from "@/assets/drawer.svg";
import DrawerMobile from "../Drawer/DrawerMobile";
export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-primaryClr ">
       
      <div className="h-16 flex items-center lg:justify-end justify-between lg:px-10 pr-28 gap-5">
      <div className=" text-2xl font-bold lg:hidden block ml-10">
          LOGO
        </div>
        <div className="flex gap-7 items-center">
        <img src={notification} alt="notification" className="h-6 w-6" />
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-yellow-300 ">
            <span className="justify-center items-center flex h-full">AP</span>
          </div>
          <div className="flex flex-col leading-4">
            <span>Anil Peter</span>
            <span className="text-xs text-[#959595]">Admin</span>
          </div>
        </div>
        </div>
        <img
          src={drawer}
          alt="drawer"
          className="size-10 absolute lg:hidden block right-8 top-3"
          onClick={toggleDrawer}
        />
      </div>
      {isOpen && <DrawerMobile isOpen={isOpen} toggleDrawer={toggleDrawer} />}
    </header>
  );
}
