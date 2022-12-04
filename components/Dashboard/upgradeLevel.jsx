import React,{useContext, useState} from 'react'
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
import { Divider } from 'antd';
import { Button } from 'antd';
import { ClientContext } from '../../context/ClientContext';
import { useAccount } from 'wagmi';
const Level = () => {
  const{address}=useAccount();
    const{rezaclesWrite,rezaclesRead}=useContext(ClientContext);
    const[isLoading,setLoading]=useState(false);
    const[isRetrieve,setRetrieve]=useState(false)
    const[level,setLevel]=useState(0);
    const handleUpgrade=async(e)=>{
      e.preventDefault();
    try{
   const rezInstance= await rezaclesWrite()
   const read= await rezaclesRead();
   const userID=await read.User_ID(address);
  const rezUpgrade= await rezInstance.upgradeLevel(userID); 
    setLoading(true) 
    console.log(`Loading - ${ rezUpgrade.hash}`);
         await  rezUpgrade.wait();
         console.log(`Success - ${ rezUpgrade.hash}`);
       setLoading(false);
   const rezRead=await rezaclesRead();
   const Level=await rezRead.getUserLevel(userID);
   setLevel(Level);
   setRetrieve(true);
    }catch(error){
      setLoading(false)
      console.log(error)
    }
    }
  return (
    <div className='w3-center'>
        <Divider orientation='center'><h3>Upgrade Level</h3></Divider>
    <div className='w3-center'>
    <Button onClick={handleUpgrade} style={{background:"white",color:"purple"}} type="default" loading={isLoading ? true : false} className='w3-margin w3-text-purple '>{isLoading ? 'Upgrading...' : 'Upgrade'}</Button>
      </div>  
   
    {isRetrieve &&
    <Alert
    banner
    closable
    message={
      <Marquee pauseOnHover gradient={false}>
      You have successfully upgraded to Level {level}
      </Marquee>} />
}
   
    </div>
  )
}

export default Level