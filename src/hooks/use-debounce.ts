import { useEffect, useState } from "react";

export function useDebounce<T>(
  value: T,
  delay: number,
  onChange?: () => void
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(prevValue => {
        prevValue !== value && onChange?.();
        return value
      });
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
