import React from 'react'

import Image from "next/image"
const RezGrid = () => {
  return (
  
    <div className="w3-cell-row w3-margin">
    <div className="w3-container w3-cell w3-mobile">
     <div className='w3-center'>
      <Image src="/ETH.png" width="70" height="70" alt=''></Image>
      <h5 className='w3-center' style={{fontWeight:'bolder'}}>ETH Compatibility</h5>
      <p>Deployed on Ethereum L2 Blockchain</p>
      </div> 
    </div>
    <div className="w3-container  w3-cell w3-mobile">
    <div className='w3-center'>
     <Image src="/Security.png" width="70" height="70" alt=''></Image>
     <h5 className='w3-center ' style={{fontWeight:'bolder'}}>Model</h5>
     <p className='w3-center'>Referral based marketing model</p>
      </div>
      
    </div>
    <div className="w3-container  w3-cell w3-mobile">
    <div className='w3-center'>
    <Image src="/Com.png" width="70" height="70" alt=''></Image>
      </div>
      <h5 className='w3-center' style={{fontWeight:'bolder'}}>Pool</h5>
      <p className='w3-center'>Uplines and Downlines Staking Pool</p>
    </div>
  </div>
 ); 
}

export default RezGrid