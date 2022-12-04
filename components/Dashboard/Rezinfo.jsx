import React,{useState,useContext} from 'react'
import { Button, Modal,Divider,Space } from 'antd';
import { MultiSigAddress, shortenAddress } from '../../utils/Rezacles';
import { ClientContext } from '../../context/ClientContext';
import { ethers } from 'ethers';
import { useTimer } from "react-timer-hook";
import {useAccount} from 'wagmi'
const Rezinfo = () => {
  const{isConnected,address}=useAccount();
    const [isModalOpen, setIsModalOpen] = useState(false);
const[ID,setID]=useState(0);
const{rezaclesRead}=useContext(ClientContext);
const[data,setData]=useState([])
const[balance,setBalance]=useState(0);
const[loading,setLoading]=useState(false)
const[uplines,SetUplines]=useState([]);
const[rezDownlines,setRezDownlines]=useState(0)
const[REZ_BALANCE,setREZ_BALANCE]=useState(0)




const handleRetrieve=async(e)=>{
e.preventDefault();

try{
const read=await rezaclesRead();
setLoading(true)

const result= await read.getRezUser(ID);
if(!result) return;
const REZ_BALANCE=Number(result.rezBalance);

const genesis= await read.getContractEarnedBonus()
const first_upline=await read.getUserById(ID);
const userBalance=await read.Balance(first_upline);
const balanceInNumber=Number(userBalance)
const balanceInMatic=ethers.utils. formatEther(balanceInNumber)



const DownlinesLength=result.rezDownlines.length;

const fif_Upline=shortenAddress(result.Uplines[0]);
const fr_Upline=shortenAddress(result.Uplines[1]);
const t_Upline=shortenAddress(result.Uplines[2]);
const s_Upline=shortenAddress(result.Uplines[3]);
const f_Upline=shortenAddress(result.Uplines[4]);
const shortUpline=[fif_Upline,fr_Upline,t_Upline,s_Upline,f_Upline];
const livePeriod=Number(result.lastTimeStamp);
setREZ_BALANCE(REZ_BALANCE)
SetUplines(shortUpline)
setData(result);
setBalance(balanceInMatic)
setRezDownlines(DownlinesLength)
showModal()
setLoading(false)
}catch(error){
  setLoading(false)
  console.log(error)

}
}
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

 
  return (
    <div>
       <Divider orientation='center'><h3>Retrieve User Info</h3></Divider>
     <div className='w3-center'>
     <form  class="w3-container w3-margin">
    <input className="w3-border-0 w3-card-4" type="number" value={ID} name={ID} onChange={(e)=>{setID(e.target.value)}}/><br></br>
     <Button  loading={loading ? true : false}  onClick={handleRetrieve} style={{background:"white",color:"purple"}} type="default" className='w3-margin w3-text-purple '>
        {loading ? 'Retrieving User Info...' : 'Retrieve User Info'}
      </Button>
     </form>
     </div>
       
       
    
      <Modal title="REZACLES USER INFO" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Your Current Level is Level {data.s_level}</p>
        <p>Your have  earned a total {balance} MATIC from your Downlines</p>
        <p>You've have earned a total {REZ_BALANCE} REZTOKEN</p>
        <p>You have referred a Total No. of {rezDownlines} people</p>
        <ul>
        <li>Your First Upline is  {uplines[4]}</li>
        <li>Your Second Upline is {uplines[3]}</li>
        <li>Your Third Upline is  {uplines[2]}</li>
        <li>Your Fourth Upline is {uplines[1]}</li>
        <li>Your Fifth Upline is  {uplines[0]}</li> 
        </ul>
      </Modal>
  
    </div>
  )
}

export default Rezinfo