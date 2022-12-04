import React from 'react'
import { Collapse } from 'antd';
import { CaretRightOutlined,PlusCircleOutlined} from '@ant-design/icons';

const { Panel } = Collapse;
export const FAQ = () => {
  return (
    <div>
    <h3 className='w3-center' style={{fontWeight:"bolder",color:"#8A2BE2"}}>Frequently Asked Question (FAQs)</h3>
    <Collapse bordered={false} expandIcon={({ isActive }) => <PlusCircleOutlined style={{fontSize:"20px",color:"#8A2BE2"}}/>} expandIconPosition="end" >
    <Panel style={{fontWeight:'bold'}}header="What is Rezacles" key="1">
<p className='w3-sans-serif' style={{fontWeight:'normal'}}>
Rezacles DeFi is a referral based marketing model that is designed to have 5 levels.
That allows users to have an unlimited number of referrals and grow a downline community of 5 generations.
    </p>   

    </Panel>
    <Panel style={{fontWeight:'bold'}}   header="The Required Number of MATIC to Stake"  key="2">
    <p className='w3-sans-serif' style={{fontWeight:'normal'}}>
      Users are to stake the 0.05 MATIC 
      </p>
    </Panel>
    <Panel  style={{fontWeight:'bold'}} header="How many Levels does the referral system have " key="3">
    <p className='w3-sans-serif' style={{fontWeight:'normal'}}>
    Rezacles referral system has 5 levels 
    </p>
    </Panel>
    <Panel style={{fontWeight:'bold'}} header="How can a Rez User upgrade their Level" key="4">
    <p className='w3-sans-serif' style={{fontWeight:'normal'}}>
    A Rez User can upgrade their Level after every 10 minutes via the Dashboard
    </p>
    </Panel>
    <Panel style={{fontWeight:'bold'}} header="What is the Maximum Level a user can upgrade to" key="5">
    <p className='w3-sans-serif' style={{fontWeight:'normal'}}>
    Rezacles maximum Level is the Fifth Level
    </p>
    </Panel>
    <Panel style={{fontWeight:'bold'}} header="Benefit involved when a user upgrade Level after 10 mins" key="6">
    <p className='w3-sans-serif' style={{fontWeight:'normal'}}>
    The User will be compensated with REZTOKEN
    </p>
    </Panel>


  </Collapse>

    </div>
  )
}

export default FAQ;