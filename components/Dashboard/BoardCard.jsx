import React,{useEffect} from 'react'



 



export const BoardCard = () => {


  return (
    <>
        <div className='w3-container w3-padding w3-center'>
        <h2>OVERVIEW</h2>
        <img className=' w3-margin w3-circle' src="/VR.png"  alt="" width="200" height="180"></img>
       <ul style={{fontSize:"16px"}} className='w3-padding'>
        <li>Rez Users are to Upgrade their levels after every 10 minutes untill they've reached the Maximum Level</li>
        <li>When a user is upgrading his/her level his/her upline in that generation receive the upgrade fee  </li>
       <li>The user will receive REZTOKEN as reward for upgrading Level</li>
       <li>Every User has 5 generation uplines above them  </li>
       </ul>
  </div >



  </>     
       


   
  )
}
