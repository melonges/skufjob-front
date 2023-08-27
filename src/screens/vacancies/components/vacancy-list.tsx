import { Vacancy } from "../../../store/services/type";
import { useTelegramWidget } from "../../../hooks/use-telegram-widget";

export function VacancyList({ vacancies }: { vacancies: Vacancy[] }) {
  useTelegramWidget();
  return (
    <div className="w-full md:columns-2 lg:columns-3">
      {vacancies.map((vacancy) => (
        // <VacancyListItem vacancy={vacancy} key={vacancy.id} />
        <div key={vacancy.id} className="mb-3">
          <script
            data-telegram-post={vacancy.link.replace("https://t.me/", "")}
            data-width="100%"
          ></script>
        </div>
      ))}
    </div>
  );
}
