import {
  Input,
  CircularProgress,
  Pagination,
  Progress,
} from "@nextui-org/react";
import { VacancyList } from "./components/vacancy-list";
import { LIMIT_PER_PAGE, urlState, useVacancyQuery } from "../../store/services/api";
import { useDebounce } from "../../hooks/use-debounce";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";
import { useUrlState } from 'state-in-url/react-router';


export function VacanciesScreen() {
  const { urlState: state, setUrl } = useUrlState(urlState)
  const debouncedSearch = useDebounce(state.search, 500, () => setUrl({ page: 1 }));

  const { data, error, status, isLoading } = useVacancyQuery({
    search: debouncedSearch,
    page: state.page,
    limit: state.limit,
  });

  if (status === QueryStatus.rejected) {
    return (
      <div className="text-center">
        Cервак здох походу 😂😂😂👍
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="w-full"
      />
    );
  }

  return (
    <>
      <div>
        <Input
          className="mb-3"
          value={state.search}
          onChange={(e) => setUrl({ search: e.currentTarget.value }, { replace: true })}
          size="lg"
          label={`Search of ${data?.count || 0} vacancies`}
        />
        {status === QueryStatus.pending && (
          <div className="flex justify-center mb-2">
            <CircularProgress size="sm" />
          </div>
        )}
      </div>
      {data!.vacancies.length < 1 && !isLoading ? (
        <div className="text-red-500 text-center">
          <p>Nothing found</p>
        </div>
      ) : (
        <VacancyList vacancies={data!.vacancies} />
      )}
      {data?.count ? (
        <div className="flex items-center justify-center pt-5">
          <Pagination
            total={Math.ceil(data.count / LIMIT_PER_PAGE)}
            page={state.page}
            onChange={page => setUrl({ page })}
          />
        </div>
      ) : null}
    </>
  );
}
