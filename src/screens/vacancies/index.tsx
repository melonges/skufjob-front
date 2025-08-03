import { Pagination } from "@nextui-org/react";
import { VacancyList } from "./components/vacancy-list";
import {
  LIMIT_PER_PAGE,
  urlState,
  useVacancyQuery,
} from "../../store/services/api";
import { useDebounce } from "../../hooks/use-debounce";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";
import { useUrlState } from "state-in-url/react-router";
import { VacancySearch } from "./components/vacancy-search";
import { VacancySkeleton } from "./components/vacancy-skeleton";

export function VacanciesScreen() {
  const { urlState: state, setUrl } = useUrlState(urlState);
  const debouncedSearch = useDebounce(state.search, 500, () =>
    setUrl({ page: 1 })
  );

  const { data, error, status } = useVacancyQuery({
    search: debouncedSearch,
    page: state.page,
    limit: state.limit,
  });

  const isLoading = status === QueryStatus.pending;

  if (status === QueryStatus.rejected) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
        <p className="text-lg">
          We couldn't fetch the vacancies. Please try again later.
        </p>
        {error && <pre className="mt-4 text-red-500">{JSON.stringify(error, null, 2)}</pre>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <VacancySearch />
      
      {isLoading && (
        <div className="w-full md:columns-2 lg:columns-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <VacancySkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && data?.vacancies.length === 0 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No vacancies found</h2>
          <p className="text-lg">
            Try adjusting your search criteria or check back later.
          </p>
        </div>
      )}

      {data && data.vacancies.length > 0 && (
        <>
          <VacancyList vacancies={data.vacancies} />
          {data.count > LIMIT_PER_PAGE && (
            <div className="flex items-center justify-center pt-5">
              <Pagination
                total={Math.ceil(data.count / LIMIT_PER_PAGE)}
                page={state.page}
                onChange={(page) => setUrl({ page })}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
