import { Vacancy } from "../../../store/services/type";
import { useTelegramWidget } from "../../../hooks/use-telegram-widget";
import { useEffect, useMemo, useState } from "react";
import useDarkMode from "use-dark-mode";
import { Button } from "@nextui-org/react";
import {
  getSavedVacancies,
  saveVacancies,
} from "../../../shared/utils/local-storage";

export function VacancyItem({ vacancy, showSavedListButton }: { vacancy: Vacancy, showSavedListButton?: boolean }) {
  const darkMode = useDarkMode();
  const [isSaved, setIsSaved] = useState(false);
  useTelegramWidget([darkMode]);

  useEffect(() => {
    const saved = getSavedVacancies();
    setIsSaved(saved.includes(vacancy));
  }, [vacancy, showSavedListButton]);


  const vacancyHtml = useMemo(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?";
    script.setAttribute("data-width", "100%");
    script.setAttribute("data-userpic", "false");
    script.setAttribute("data-dark", Number(darkMode.value).toString());
    script.setAttribute("data-color", "42C5C7");
    const decodedVacancyString = atob(vacancy);
    script.setAttribute("data-telegram-post", decodedVacancyString);
    return script;
  }, [darkMode, vacancy]);

  const handleToggleSave = () => {
    let savedVacancies = getSavedVacancies();

    if (isSaved) {
      savedVacancies = savedVacancies.filter((v) => v !== vacancy);
      console.log("Vacancy unsaved:", decodedVacancyString);
    } else {
      if (!savedVacancies.includes(vacancy)) {
        savedVacancies = [...savedVacancies, vacancy];
        console.log("Vacancy saved:", decodedVacancyString);
      }
    }
    saveVacancies(savedVacancies);
    setIsSaved(!isSaved);
  };

  const decodedVacancyString = useMemo(() => atob(vacancy), [vacancy]);

  return (
    <div className="relative">
      <div
        dangerouslySetInnerHTML={{ __html: vacancyHtml.outerHTML }}
        className="mb-3"
      />
      {showSavedListButton && (
        <div className="absolute top-2 left-4 z-10">
          <Button
            color={isSaved ? "warning" : "primary"}
            onClick={handleToggleSave}
            size="md"
          >
            {isSaved ? "♥ UNSAVE" : "♥ SAVE"}
          </Button>
        </div>
      )}
    </div>
  );
}
