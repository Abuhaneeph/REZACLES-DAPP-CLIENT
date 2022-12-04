import React,{useState} from 'react'
import { Button, message, Steps,Divider } from 'antd';


const steps = [
  {
    title: 'First',
    content: 'Once a user stakes 0.05 MATIC into the staking pool, the user can ascend through all the different levels. This ascension is done by the user on a timely interval of 10 Minutes.'

  },
  {
     title:'Second',
     content: 'Both the Downline(REZ USER) and Upline earn reward after ascension of Level '
  },
  {
    title: 'Third',
    content: " Users can start building their community by referring others to stake in the pool And this can be done even before ascending to the last level"

  },
  {
    title: 'Fourth',
    content: "Rezacles referral system has 5 levels. On every level of ascension, there is a 0.002 MATIC fee involved, which is designed to compensate a user's upline generations .",
  },
  {
   title:'Fifth',
   content:' This fee is the same for each level, and it is deducted from the staking pool'

  },
 {
title:'Sixth',
content:'REZTOKEN is used to compensate the downline on every ascension'
 },
  {
    title: 'Last',
    content:"On every ascension of Level, The downline is also compensated with REZTOKEN"
  }
];
const RezSteps = () => {

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map(item => ({ key: item.title, title: item.title }));

  return (
    <>
    <Divider orientation='left'><h3>Overview</h3></Divider>
      <Steps className='w3-hide-small w3-hide-medium w3-hide-large  w3-margin' style={{color:"purple"}}  current={current} items={items} responsive />
      <div className=" w3-center w3-margin-top w3-container steps-content w3-padding "  style={{backgroundColor:'#fafafa'}}>{steps[current].content}</div>
      <div className=" w3-center  steps-action" style={{backgroundColor:'#fafafa'}}>
      {current > 0 && (
          <Button style={{borderColor:'#8A2BE2',color:"#8A2BE2"}}className='w3-margin' onClick={() => prev()}>
            Previous
          </Button>
        )}
        
        {current === steps.length - 1 && (
          <Button style={{backgroundColor:"#8A2BE2",borderColor:'#8A2BE2'}} className='w3-margin' type="primary" onClick={() => message.success('Thanks for Reading!')}>
            Done
          </Button>
        )}
       

{current < steps.length - 1 && (
          <Button style={{backgroundColor:"#8A2BE2",borderColor:'#8A2BE2'}}  className='w3-margin w3-center' type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
      </div>
    </>

 
  
  )
}

export default RezSteps
