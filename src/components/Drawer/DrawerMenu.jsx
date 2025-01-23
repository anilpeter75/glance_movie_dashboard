import Dashboard from "@/assets/Dashboard.svg";
import Movie from "@/assets/movie.svg";

import { NavLink } from "react-router";

export default function DrawerMenu() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: Dashboard,
      link: "/",
    },
    {
      name: "Movie List",
      icon: Movie,
      link: "/all_movies",
    },
  ];
  return (
    <div className="mx-3 mt-5">
      {MenuList.map((item) => (
        <NavLink
          to={item.link}
          key={item.name}
          className={({ isActive }) =>
            `flex items-center gap-5 py-2 pl-3 rounded-lg mb-3 ${
              isActive ? "bg-[#3392ff]" : ""
            }`
          }
        >
          <img src={item.icon} alt={item.icon} className="size-4" />
          <p>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
}
