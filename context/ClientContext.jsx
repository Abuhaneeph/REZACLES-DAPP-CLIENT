import React,{createContext} from 'react'
import { ethers} from "ethers";
import RezaclesAddress from '../utils/Rezacles';
import RezaclesABI from '../utils/RezaclesABI';
import { fetchSigner,getProvider } from '@wagmi/core';
export const ClientContext=createContext();
const ClientContextProvider = ({children}) => {
   
  

  
  async function rezaclesWrite(){
    const signer=await fetchSigner({chainId: 80001});
    const rezContract = new ethers.Contract(RezaclesAddress, RezaclesABI, signer);
     return rezContract; 
}

async function rezaclesRead(){
  const provider=getProvider();
  const rezContract = new ethers.Contract(RezaclesAddress, RezaclesABI, provider);
     return rezContract;
}

  return (
    <ClientContext.Provider value={{rezaclesWrite,rezaclesRead}}>
    {children}
    </ClientContext.Provider>
    
  )
}

export default ClientContextProvider