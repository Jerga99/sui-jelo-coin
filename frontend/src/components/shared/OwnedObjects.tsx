import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";
import { SuiObject } from "./SuiObject";

export const OwnedObjects = () => {
  const account = useCurrentAccount();
  const { data, isPending, error } = useSuiClientQuery(
    "getOwnedObjects",
    {
      owner: account?.address as string,
    },
    {
      // The enabled option determines whether the query should be executed.
      // When enabled is false, the query will not run
      enabled: !!account,
    },
  );

  if (!account) {
    return null;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (isPending || !data) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex flex-col my-4 space-y-4">
      {data.data.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">
          No objects owned by the connected wallet
        </p>
      ) : (
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Objects owned by the connected wallet
        </h2>
      )}
      <div className="space-y-2">
        {data.data.map((object) => (
          <SuiObject objectId={object.data?.objectId as string} />
        ))}
      </div>
    </div>
  );
}
