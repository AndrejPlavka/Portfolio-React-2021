import { PostType } from "./BlogContext";
import { useState } from "react";

const BLOG_LS_NAME = "blog-data";

/**
 * Inspiration: https://usehooks.com/useLocalStorage/
 */
export const useLokalStorage = (defaultValue: PostType[]) => {
  // storedValue, setStoredValue
  const [posts, setPostsLocally] = useState(() => {
    try {
      const data = localStorage.getItem(BLOG_LS_NAME);
      return data ? JSON.parse(data) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const setPosts = (value: PostType[] | ((v: PostType[]) => PostType[])) => {
    try {
      const valueToStore = value instanceof Function ? value(posts) : value;
      setPostsLocally(valueToStore);
      localStorage.setItem(BLOG_LS_NAME, JSON.stringify(valueToStore));
    } catch {}
  };

  return [posts, setPosts] as const;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// export function useLocalStorage<T>(key: string, initialValue: T) {
//   // State to store our value
//   // Pass initial state function to useState so logic is only executed once
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     try {
//       // Get from local storage by key
//       const item = window.localStorage.getItem(key);
//       // Parse stored json or if none return initialValue
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       // If error also return initialValue
//       // eslint-disable-next-line no-console
//       console.log(error);
//       return initialValue || "";
//     }
//   });
//   // Return a wrapped version of useState's setter function that ...
//   // ... persists the new value to localStorage.
//   const setValue = (value: T | ((val: T) => T)) => {
//     try {
//       // Allow value to be a function so we have same API as useState
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       // Save state
//       setStoredValue(valueToStore);
//       // Save to local storage - The browser storage only accepts data-type strings.
//       // Values of different data types (object or array) we must convert it to a JSON string
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       // A more advanced implementation would handle the error case
//       // eslint-disable-next-line no-console
//       console.log(error);
//     }
//   };
//   return [storedValue, setValue] as const;
// }
