import React, { useEffect, useState } from "react";
import { NavigationContext } from "./NavigationContext";

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>(window.location.pathname);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, "", page); // Update the URL
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname); // Update state when browser back/forward is used
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
