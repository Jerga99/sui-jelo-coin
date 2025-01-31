import React from "react";
import { ConnectButton } from "@mysten/dapp-kit";

const NavBar: React.FC = () => {

  return (
    <nav className="bg-transparent p-4 shadow-md w-full">
      <div className="flex justify-end">
        <ConnectButton />
      </div>
    </nav>
  );
};

export default NavBar;
