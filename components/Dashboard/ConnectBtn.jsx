import React from 'react'
import { Web3Button } from "@web3modal/react";
const ConnectBtn = () => {
  
  return (
    <div>
 <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
     <Web3Button />
   
    </div>
    </div>
  )
}

export default ConnectBtn