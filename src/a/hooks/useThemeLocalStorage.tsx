import { useEffect, useState } from "react";

/**
 * Inspiration: https://usehooks.com/useLocalStorage/
 */

export function useThemeLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  //    storedValue, setStoredValue
  const [themeName, setThemeNameLocally] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      // eslint-disable-next-line no-console
      console.log(error);
      return initialValue || "";
    }
  });

  // synchronizacia zmien medzi viacerymi sucasne otvorenymi oknami jednej stranky.
  // This effect would make change in diffrent window of same
  // useEffect(() => {
  //   const listener = (e) => {
  //     if (e.storageArea === localStorage && e.key === key) {
  //       setThemeNameLocally(JSON.parse(e.NewValue));
  //     }
  //   };
  //   window.addEventListener("storage", listener);

  //   return () => {
  //     window.removeEventListener("storage", listener);
  //   };
  // }, [key]);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setThemeName = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(themeName) : value;
      // Save state
      setThemeNameLocally(valueToStore);
      // Save to local storage - The browser storage only accepts data-type strings.
      // Values of different data types (object or array) we must convert it to a JSON string
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return [themeName, setThemeName] as const;
}
