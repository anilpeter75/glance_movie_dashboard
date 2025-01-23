// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import DrawerMenu from "./DrawerMenu";

export default function DrawerMobile({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className="bla bla bla"
    >
      <div className="bg-secondaryClr h-full">
        <div className=" flex flex-col items-center h-16 justify-center text-2xl font-bold">
          LOGO
        </div>
        <DrawerMenu />
      </div>
    </Drawer>
  );
}
