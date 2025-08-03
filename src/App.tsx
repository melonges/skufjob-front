import { Route, Routes } from "react-router-dom";
import { VacanciesScreen } from "./screens/vacancies";
import useDarkMode from "use-dark-mode";
import { FavoritesScreen } from "./screens/favorites";
import { Layout } from "./components/layout";
import { NotFoundScreen } from "./screens/not-found";

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
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<VacanciesScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
