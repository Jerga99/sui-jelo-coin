import React from "react";
import { useNavigation } from "../../providers/navigation/NavigationContext";
import { ConnectButton } from "@mysten/dapp-kit";
import { useTheme } from "../../providers/theme/ThemeContext";

const NavBar: React.FC = () => {
  const { toggleDarkMode }  = useTheme();
  const { currentPage, navigate } = useNavigation();

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 shadow-md">
      <div className="flex flex-row justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => navigate("/")}
              className={`px-4 py-2 rounded ${currentPage === "/" ? "bg-blue-500 text-white" : "hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/wallet")}
              className={`px-4 py-2 rounded ${currentPage === "/wallet" ? "bg-blue-500 text-white" : "hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              Wallet
            </button>
          </li>
        </ul>
        <div className="flex space-x-6 all-[initial]">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded bg-blue-500 text-white  hover:bg-gray-300 dark:hover:bg-gray-700">
            Toggle Me
          </button>
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
