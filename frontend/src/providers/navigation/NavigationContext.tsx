import { useContext, createContext } from "react";

type NavigationContextType = {
  currentPage: string;
  navigate: (page: string) => void;
};

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
