import { Vacancy } from "../../../store/services/type";
import { useTelegramWidget } from "../../../hooks/use-telegram-widget";
import { useMemo } from "react";
import useDarkMode from "use-dark-mode";
export function VacancyList({ vacancies }: { vacancies: Vacancy[] }) {
  const darkMode = useDarkMode();
  useTelegramWidget([darkMode]);
  console.log("render");
  const script = useMemo(() => {
    console.log("compute");
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?";
    script.setAttribute("data-width", "100%");
    script.setAttribute("data-userpic", "false");
    script.setAttribute("data-dark", Number(darkMode.value).toString());
    script.setAttribute("data-color", "42C5C7");
    return script;
  }, [darkMode]);
  return (
    <div className="w-full md:columns-2 lg:columns-3">
      {vacancies.map((vacancy) => {
        const vacancyHtml = script;
        vacancyHtml.setAttribute("data-telegram-post", vacancy.link);
        return (
          <div
            dangerouslySetInnerHTML={{ __html: vacancyHtml.outerHTML }}
            key={vacancy.id}
            className="mb-3"
          ></div>
        );
      })}
    </div>
  );
}
