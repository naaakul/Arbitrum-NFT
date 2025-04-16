import React from 'react';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { arbitrum, arbitrumSepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const queryClient = new QueryClient();

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [arbitrum, arbitrumSepolia],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
});

interface Web3ProviderProps {
  children: React.ReactNode;
}

export function Web3Provider({ children }: Web3ProviderProps): JSX.Element {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiConfig>
  );
}