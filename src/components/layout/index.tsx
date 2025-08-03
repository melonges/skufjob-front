import { NavLink, Outlet } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { ThemeSwitcher } from "../theme-switcher";

export function Layout() {

  return (
    <div className="container p-5 mx-auto">
      <div className="flex justify-between mb-3">
        <NavLink
          to="/"
          className="w-16 pl-2 slide-in-blurred-topslide-in-blurred-top"
        >
          <Image src="/SkufJob-logo.png" alt="logo" className="rounded-md" />
        </NavLink>

        <div className="flex items-center gap-4">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `hover:border-b-foreground border-b-2 ${
                isActive ? "border-b-foreground" : "border-b-transparent"
              }`
            }
          >
           💼 Saved Jobs 
          </NavLink>
          <ThemeSwitcher />
        </div>
      </div>

      <Outlet />
    </div>
  );
}
