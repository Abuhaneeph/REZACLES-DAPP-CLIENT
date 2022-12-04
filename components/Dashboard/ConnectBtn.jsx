import React from 'react'
import { watchAccount } from '@wagmi/core'
import { Web3Button } from "@web3modal/react";
const ConnectBtn = () => {
  const unwatch = watchAccount((account) => console.log(account))
  return (
    <div>
 <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
     <Web3Button unwatch/>
   
    </div>
    </div>
  )
}

export default ConnectBtn