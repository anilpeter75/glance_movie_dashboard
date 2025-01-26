import { Link } from "react-router-dom";
import DrawerMenu from "./DrawerMenu";

export default function Drawer() {
  return (
    <div>
      <div className="bg-secondaryClr shadow-2xl fixed top-0 bottom-0 w-[200px] lg:block hidden">
        <div className=" flex flex-col items-center h-16 justify-center text-2xl font-bold">
        <Link to="/">LOGO</Link>
        </div>
        <DrawerMenu />
      </div>
    </div>
  );
}
