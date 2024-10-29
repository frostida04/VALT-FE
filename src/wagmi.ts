import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { arbitrum, bsc, bscTestnet, mainnet, polygon, sepolia } from "wagmi/chains";

const projectId = "f658b216430fa90dba99f1973ad4db70";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum, bsc, polygon, bscTestnet, sepolia] as const;

export const config = defaultWagmiConfig({
  projectId,
  chains,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
  ssr: true
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});