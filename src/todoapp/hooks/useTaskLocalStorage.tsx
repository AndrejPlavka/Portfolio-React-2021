import { TaskType } from "../TodoApp";
import { useState } from "react";

/**
 * Inspiration: https://usehooks.com/useLocalStorage/
 */

export function useTaskLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  //    storedValue, setStoredValue
  const [tasks, setTasksLocally] = useState<T>(() => {
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
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setTasks = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(tasks) : value;
      // Save state
      setTasksLocally(valueToStore);
      // Save to local storage - The browser storage only accepts data-type strings.
      // Values of different data types (object or array) we must convert it to a JSON string
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  return [tasks, setTasks] as const;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// const TODO_LS_NAME = "todo-data";

// export const useTaskLocalStorage = (defaultValue: TaskType[]) => {
//   // storedValue, setStoredValue
//   const [tasks, setTasksLocally] = useState(() => {
//     try {
//       const data = localStorage.getItem(TODO_LS_NAME);
//       return data ? JSON.parse(data) : defaultValue;
//     } catch {
//       return defaultValue;
//     }
//   });

//   const setTasks = (value: TaskType[] | ((v: TaskType[]) => TaskType[])) => {
//     try {
//       const valueToStore = value instanceof Function ? value(tasks) : value;
//       setTasksLocally(valueToStore);
//       localStorage.setItem(TODO_LS_NAME, JSON.stringify(valueToStore));
//     } catch {}
//   };

//   return [tasks, setTasks] as const;
// };
