import { Vacancy } from "../../store/services/type";
import { LOCAL_STORAGE_SAVED_VACANCIES_KEY } from "../constants";

export const getSavedVacancies = (): Vacancy[] => {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_SAVED_VACANCIES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to parse saved vacancies from localStorage:", error);
    return [];
  }
};

export const saveVacancies = (vacancies: Vacancy[]) => {
  try {
    localStorage.setItem(
      LOCAL_STORAGE_SAVED_VACANCIES_KEY,
      JSON.stringify(vacancies)
    );
  } catch (error) {
    console.error("Failed to save vacancies to localStorage:", error);
  }
};
