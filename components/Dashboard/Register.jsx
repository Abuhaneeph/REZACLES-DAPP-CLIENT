import React,{useContext,useState} from 'react'
import { ethers, providers } from "ethers";
import { ClientContext } from '../../context/ClientContext'
import { Divider,Alert,Button, Space } from 'antd';
import Marquee from 'react-fast-marquee';
import { connect } from '@wagmi/core';

const Register = () => {
 
  //REG WITHOUT REFERRAL STATES
  const[ID,setID]=useState(0);
  const[isLoading,setLoading]=useState(false);
  const[user,setUser]=useState(0)
  const[isSuccess,setSuccess]=useState(false);
  
  //REG WITH REFERRAL STATES
  
  const[rUser,setrUser]=useState(0)
  const[isRefLoading,setRefLoading]=useState(false)
  const[isRefSuccess,setRefSuccess]=useState(false);
    const{rezaclesWrite,rezaclesRead}=useContext(ClientContext);
    
    const handleRegister=async()=>{
      try{
    const rezInstance=await rezaclesWrite();
    const rezWrite=await rezInstance.registerWithGenesisId({value: ethers.utils.parseEther("0.01")});
    setLoading(true) 
    console.log(`Loading - ${rezWrite.hash}`);
         await rezWrite.wait();
         console.log(`Success - ${rezWrite.hash}`);
       setLoading(false);
   const rezRead=await rezaclesRead();
   const UserID=await rezRead.ID();
   setUser(UserID)
   setSuccess(true)
      }catch(error){
        setLoading(false);
     console.log(error)
      }
    }

    const handleReferralReg=async(e)=>{
   e.preventDefault();
    try{
    const rezInstance=await rezaclesWrite();
    const rez=await rezInstance.registerWithReferralId(ID,{value: ethers.utils.parseEther("0.01")})
    setRefLoading(true) 
     console.log(`Loading - ${rez.hash}`);
          await rez.wait();
          console.log(`Success - ${rez.hash}`);
        setRefLoading(false);
    const readRez=await rezaclesRead();
    const UserID=await readRez.ID();
    setrUser(UserID)
    setRefSuccess(true)

    }catch(error){
      setRefLoading(false);
      console.log(error)
    }
    }

   
  return (
    <div className='w3-center'>
      <Divider orientation='center'><h3>Register</h3></Divider>
      <div>

      </div>
      <Button onClick={handleRegister} style={{background:"white",color:"purple"}} type="default" loading={isLoading ? true : false} className='w3-margin w3-text-purple'>{isLoading ? 'Registering...' : 'Register'}</Button>
      {isSuccess && 
    <Alert
    banner
    closable
    message={
      <Marquee pauseOnHover gradient={false} >
        <Space>
       <div>You have Succesfully registered with Rezacles, </div> 
       <div>Your Referral ID is {Number(user)},</div> 
       <div>Share your Referral ID with your Family and Friend and earn as they upgrade their Rez Level.</div>  
       </Space>
      </Marquee>} />
}

       
    
  
    <Divider orientation='center'><h3>Register with Referral ID</h3></Divider>
    <form  class="w3-container w3-margin">
    <input className="w3-border-0 w3-card-4" type="number" value={ID} name={ID} onChange={(e)=>{setID(e.target.value)}}/><br></br>
    <Button onClick={handleReferralReg} style={{background:"white",color:"purple"}} type="default" loading={isRefLoading ? true : false} className='w3-margin w3-text-purple '>{isRefLoading ? 'Registering...' : 'Register'}</Button>
    {isRefSuccess && 
    <Alert
    banner
    closable
    message={
      <Marquee pauseOnHover gradient={false} >
        <Space>
       <div>You have Succesfully registered with Rezacles, </div> 
       <div>Your Referral ID is {Number(rUser)},</div> 
       <div>Share your Referral ID with your Family and Friend and earn as they upgrade their Rez Level.</div>  
       </Space>
      </Marquee>} />
}
    </form>
    </div>
  )
}

export default Register