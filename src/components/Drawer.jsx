import React from "react";
import DrawerMenu from "./DrawerMenu";

export default function Drawer() {
  return (
    <div className="bg-secondaryClr shadow-2xl">
      <div className=" flex flex-col items-center h-16 justify-center text-2xl font-bold">
        LOGO
      </div>
      <DrawerMenu />
    </div>
  );
}
