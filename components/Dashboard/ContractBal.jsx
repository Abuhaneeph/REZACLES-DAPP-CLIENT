import { Button } from 'antd'
import React, { useContext } from 'react'
import { ClientContext } from '../../context/ClientContext'
import { ethers } from 'ethers'
import { useAccount } from 'wagmi'
const ContractBal = () => {
    const{rezaclesRead}=useContext(ClientContext)
    const {isConnected}=useAccount()
    const getBal=async()=>{
 
  const rslt =await rezaclesRead();
  const bal=await rslt.getContractEarnedBonus();
  alert("The Owner earned Upline Bonus is "+ethers.utils.formatEther(bal)+" MATIC")

    }
  return (
    <div className='w3-left w3-margin'>
        <Button disabled={!isConnected}  type='primary' onClick={getBal}>Owner's Balance</Button>
    </div>
  )
}

export default ContractBal