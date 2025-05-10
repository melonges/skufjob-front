import { Vacancy } from "../../../store/services/type";
import { useTelegramWidget } from "../../../hooks/use-telegram-widget";
import { useEffect, useMemo, useState } from "react";
import useDarkMode from "use-dark-mode";
import { Button } from "@nextui-org/react";
import { useDeleteVacancyMutation } from "../../../store/services/api";

export function VacancyItem({ vacancy }: { vacancy: Vacancy }) {
  const darkMode = useDarkMode();
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [deleteVacancy] = useDeleteVacancyMutation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey) {
        setShowDeleteButton(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.shiftKey) {
        setShowDeleteButton(false);
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useTelegramWidget([darkMode]);

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

  const handleDelete = () => {
    console.log("Delete button clicked", vacancy);
    deleteVacancy(vacancy);
  };

  return (
    <div className="relative">
      <div
        dangerouslySetInnerHTML={{ __html: vacancyHtml.outerHTML }}
        key={vacancy}
        className="mb-3"
      />
      {showDeleteButton && (
        <div className="absolute top-2 left-4">
          <Button color="danger" onClick={handleDelete}>
            DELETE
          </Button>
        </div>
      )}
    </div>
  );
}
