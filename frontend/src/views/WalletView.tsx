import { FC } from "react";
import { WalletStatus } from "../components/wallet/Status";

const WalletView: FC = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Wallet Info</h1>
      </div>
      <WalletStatus />
    </>
  )
}

export default WalletView;
