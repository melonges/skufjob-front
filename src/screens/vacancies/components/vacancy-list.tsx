import { Vacancy } from "../../../store/services/type";
import { useTelegramWidget } from "../../../hooks/use-telegram-widget";
import useDarkMode from "use-dark-mode";
import { VacancyItem } from "./vacancy-item";

export function VacancyList({ vacancies }: { vacancies: Vacancy[] }) {
  const darkMode = useDarkMode();
  useTelegramWidget([darkMode]);

  return (
    <div className="w-full md:columns-2 lg:columns-3">
      {vacancies.map((vacancy) => (
        <VacancyItem vacancy={vacancy} key={vacancy} />
      ))}
    </div>
  );
}
