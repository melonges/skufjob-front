import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { VacanciesScreen } from "./screens/vacancies";
import useDarkMode from "use-dark-mode";
import { FavoritesScreen } from "./screens/favorites";
import { Image, Switch } from "@nextui-org/react";

function App() {
  const darkMode = useDarkMode(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <main
      className={`${
        darkMode.value ? "dark" : ""
      } text-foreground bg-background min-h-screen`}
    >
      <BrowserRouter>
        <div className="container p-5 mx-auto">
          <div className="flex justify-between mb-3">
            <NavLink
              to="/"
              className="w-16 pl-2 slide-in-blurred-topslide-in-blurred-top"
            >
              <Image src="SkufJob-logo.png" alt="logo" className="rounded-md" />
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

              <Switch
                className="ml-auto"
                isSelected={darkMode.value}
                onValueChange={(v) =>
                  v ? darkMode.enable() : darkMode.disable()
                }
                size="lg"
                startContent={<p>🌞</p>}
                endContent={<p>🌚</p>}
                color="secondary"
              />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<VacanciesScreen />} />
            <Route path="/favorites" element={<FavoritesScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
