import '../styles/globals.css'
import 'antd/dist/reset.css';
import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
  } from "@web3modal/ethereum";
  
  import { Web3Modal } from "@web3modal/react";
  
  import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
 
  
const chains = [chain.polygonMumbai];
const PROJECT_ID="f9868f7c293b576d205a491962d2e0f4";

  // Wagmi client

const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: PROJECT_ID }),
  ]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "web3Modal", chains }),
    provider,
  });
  
  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);
import ClientContextProvider from '../context/ClientContext'
function MyApp({ Component, pageProps }) {
 return(
 <>
 <ClientContextProvider>
  <Component {...pageProps} />
  </ClientContextProvider>
   <Web3Modal
   projectId= {PROJECT_ID}
   ethereumClient={ethereumClient}

 />
 </>
 )
}

export default MyApp
