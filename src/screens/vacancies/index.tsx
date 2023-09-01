import { Input, CircularProgress, Switch } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { VacancyList } from "./components/vacancy-list";
import { useVacancyQuery } from "../../store/services/api";
import { useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";

const LIMIT_PER_PAGE = 10;

export function VacanciesScreen() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const darkMode = useDarkMode();
  const debouncedSearch = useDebounce(search);

  const { data, error, status, isLoading } = useVacancyQuery({
    search: debouncedSearch,
    page,
    limit: LIMIT_PER_PAGE,
  });

  if (status === QueryStatus.rejected) {
    return (
      <div>
        Cервак здох походу 😂😂😂👍
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  if (isLoading) {
    return <h1>"ЗАГРУЖАЕМСЯ ПЕРВЫЙ РАЗ"</h1>;
  }

  return (
    <div className="container p-5 mx-auto">
      <Switch
        isSelected={darkMode.value}
        onValueChange={(v) => {
          v ? darkMode.enable() : darkMode.disable();
          window.location.reload();
        }}
        size="lg"
        color="success"
      >
        Dark mode
      </Switch>
      <div>
        <Input
          className="mb-3"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          size="lg"
          label={`Search of ${data?.count || 0} vacancies`}
        />
        {status === QueryStatus.pending && (
          <div className="flex justify-center">
            <CircularProgress size="sm" />
          </div>
        )}
      </div>

      {data!.vacancies.length < 1 ? (
        <div className="text-red-500">
          С такими запросами только на завод (не нашли ничо)
        </div>
      ) : (
        <VacancyList vacancies={data!.vacancies} />
      )}
    </div>
  );
}
