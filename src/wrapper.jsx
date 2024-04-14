import React from "react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";

const chains = [mainnet, polygon];
const projectId = "ba1b9bf3d773d7b5489f0e061389a5ad";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
var wagmiConfig;
var ethereumClient = null;
try {
  wagmiConfig = createConfig({
    autoConnect: false,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    publicClient,
  });
  ethereumClient = new EthereumClient(wagmiConfig, chains);
} catch (e) {
  console.log("wagmiError", e);
}

// window.alert = console.log;

export const WagmiWrapperProvider = ({ children }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};
