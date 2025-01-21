import React from "react";
import notification from "../../assets/notification.svg";
export default function NavBar() {
  return (
    <header className="bg-primaryClr">
      <div className="h-16 flex items-center justify-end px-10 gap-5">
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
    </header>
  );
}
