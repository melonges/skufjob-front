import { NavLink, Outlet } from "react-router-dom";
import { Image, Chip } from "@nextui-org/react";
import { ThemeSwitcher } from "../theme-switcher";
import { useVacancyQuery } from "../../store/services/api";
import { urlState } from "../../store/services/api";

export function Layout() {
  const { data } = useVacancyQuery(urlState);

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
          <Chip variant="shadow" color="warning">All vacancies: {data?.count}</Chip>
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
