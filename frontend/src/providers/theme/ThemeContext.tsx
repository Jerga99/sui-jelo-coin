import { useContext, createContext } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultContext = {
  darkMode: true,
  toggleDarkMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const useTheme = () => useContext(ThemeContext);
