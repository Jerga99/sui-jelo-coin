import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};
