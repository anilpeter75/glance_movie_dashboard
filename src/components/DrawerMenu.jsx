import React from "react";
import Dashboard from "../assets/Dashboard.svg";

export default function DrawerMenu() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: Dashboard,
    },
    {
        name: "Dashboard",
        icon: Dashboard,
      },
  ];
  return (
    <div>
      {MenuList.map((item) => (
        <div key={item.name} className="flex items-center gap-5 justify-center p-1">
            <img src={item.icon} alt={item.icon} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
