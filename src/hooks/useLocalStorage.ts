import { useState } from "react";
import { Movie } from "../types/types";

const useLocalStorage = (key: string, initialValue: Movie[]) => {
  const [storedValue, setStoredValue] = useState<Movie[]>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  const setValue = (value: Movie[]) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
