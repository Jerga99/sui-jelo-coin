import { useCurrentAccount } from "@mysten/dapp-kit";
import { OwnedObjects } from "../shared/OwnedObjects";

export const WalletStatus = () => {
  const account = useCurrentAccount();

  return (
    <div className="my-2 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-bold">Wallet Status</h2>

      {account ? (
        <div className="flex flex-col space-y-1">
          <p className="text-gray-700 dark:text-gray-300">Wallet connected</p>
          <p className="text-gray-700 dark:text-gray-300">
            Address: <span className="font-mono">{account.address}</span>
          </p>
        </div>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">Wallet not connected</p>
      )}

      <OwnedObjects />
    </div>
  );
};
