import { useEffect, useState } from "react";
import { Vacancy } from "../../store/services/type";
import { getSavedVacancies } from "../../shared/utils/local-storage";
import { VacancyItem } from "../vacancies/components/vacancy-item";

export function FavoritesScreen() {
  const [savedVacancies, setSavedVacancies] = useState<Vacancy[]>([]);

  useEffect(() => {
    setSavedVacancies(getSavedVacancies());
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Your Saved Jobs</h1>

      {savedVacancies.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't saved any jobs yet. Hold <kbd>Shift</kbd> and click "SAVE"
          on job posts to add them here!
        </p>
      ) : (
        <div className="w-full md:columns-2 lg:columns-3">
          {savedVacancies.map((vacancy) => (
            <VacancyItem vacancy={vacancy} key={vacancy} />
          ))}
        </div>
      )}
    </div>
  );
}
