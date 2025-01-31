import React from "react";
import { useTheme } from "./providers/theme/ThemeContext";
import NavBar from "./components/shared/Navbar";
import { NavigationProvider } from "./providers/navigation/NavigationProvider";
import { useNavigation } from "./providers/navigation/NavigationContext";
import WalletView from "./views/WalletView";
import HomeView from "./views/HomeView";

const Pages: React.FC = () => {
  const { currentPage } = useNavigation();

  switch (currentPage) {
    case "/":
    case "":
      return <HomeView />;
    case "/wallet":
      return <WalletView />
    default:
      return <div className="text-center">Page not found!</div>;
  }
};

const App: React.FC = () => {
  const { darkMode }  = useTheme();

  return (
    <NavigationProvider>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="min-h-screen justify-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          <NavBar />
          <div className="max-w-screen-xl m-auto pt-16">
            <Pages />
          </div>
        </div>
      </div>
    </NavigationProvider>
  );
};

export default App;
