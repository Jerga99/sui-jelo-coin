import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

const { networkConfig } = createNetworkConfig({
  devnet: {
    url: getFullnodeUrl("devnet"),
  },
  testnet: {
    url: getFullnodeUrl("testnet"),
  },
  mainnet: {
    url: getFullnodeUrl("mainnet"),
  },
});

export { networkConfig };
