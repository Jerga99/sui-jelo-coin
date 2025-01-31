import { useSuiClientQuery } from "@mysten/dapp-kit";

interface ObjectProps {
  objectId: string;
}

export const SuiObject: React.FC<ObjectProps> = ({ objectId }) => {
  const { data: objectDetails, isPending, error } = useSuiClientQuery(
    "getObject",
    { id: objectId ,
      options: {
        showType: true,
        showContent: true,
        showOwner: true
      }
    },
    {
      enabled: !!objectId, // Ensure query only runs if `objectId` is valid
    }
  );

  if (isPending) {
    return <div className="text-gray-500">Loading object details...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  const objectType = objectDetails?.data?.type;
  const isCoin = objectType?.includes("0x2::coin::Coin");
  const balance = isCoin ? (objectDetails.data?.content as any)?.fields?.balance : null;

  return (
    <div className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Object ID:</strong> {objectId}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Type:</strong> {objectType || "Unknown"}
      </p>
      {objectType?.startsWith("0x2::coin::Coin") && balance && (
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Balance:</strong> {Number(balance)} SUI
        </p>
      )}
    </div>
  );
};
