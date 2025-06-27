import { useEffect, useState } from "react";
import { Vacancy } from "../../../store/services/type";
import { useTelegramWidget } from "../../../hooks/use-telegram-widget";
import useDarkMode from "use-dark-mode";
import { VacancyItem } from "./vacancy-item";

export function VacancyList({ vacancies }: { vacancies: Vacancy[] }) {
  const darkMode = useDarkMode();
  useTelegramWidget([darkMode]);
  const [showSavedListButton, setShowSavedListButton] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey) {
        setShowSavedListButton(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.shiftKey) {
        setShowSavedListButton(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="w-full md:columns-2 lg:columns-3">
      {vacancies.map((vacancy) => (
        <VacancyItem vacancy={vacancy} showSavedListButton={showSavedListButton} key={vacancy} />
      ))}
    </div>
  );
}
