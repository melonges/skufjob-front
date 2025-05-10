import { VacanciesScreen } from "./screens/vacancies";
import useDarkMode from "use-dark-mode";

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
      <VacanciesScreen />
    </main>
  );
}

export default App;
