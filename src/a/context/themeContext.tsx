import { ReactNode, createContext, useEffect, useState } from "react";
import { useThemeLocalStorage } from "../hooks/useThemeLocalStorage";
import PropTypes from "prop-types";

type ContextProps = {
  themeName: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextProps>({} as ContextProps);
// uprava - ({children})
export const ThemeProvider = (props: { children: ReactNode }) => {
  const [themeName, setThemeName] = useThemeLocalStorage("theme", "light");

  // useEffect(() => {
  //   const isDark = localStorage.getItem("themeName") === "dark";
  //   if (isDark) setThemeName("dark");
  // }, []);

  // useEffect(() => {
  //   setThemeName((p) => {
  //     if (p === "dark") {
  //       return "dark";
  //     }
  //     return p;
  //   });
  // }, []);

  const toggleTheme = () => {
    setThemeName((cur) => (cur === "light" ? "dark" : "light"));
  };

  const contextValue = {
    themeName,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
