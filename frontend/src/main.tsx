import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mysten/dapp-kit/dist/index.css';
import App from './App.tsx'
import { ThemeProvider } from './providers/theme/ThemeProvider.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { networkConfig } from './config/networkConfig.ts'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider defaultNetwork="testnet" networks={networkConfig}>
        <WalletProvider autoConnect>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </StrictMode>,
)
