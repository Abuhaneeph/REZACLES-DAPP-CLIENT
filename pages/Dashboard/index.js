import React from 'react'
import styles from './board.module.css';
import Head from 'next/head';
import ConnectBtn from '../../components/Dashboard/ConnectBtn';
import { BoardCard } from '../../components/Dashboard/BoardCard';
import Layout from 'antd/lib/layout/layout';
import Register from '../../components/Dashboard/Register';
import Level from '../../components/Dashboard/upgradeLevel';
import Rezinfo from '../../components/Dashboard/Rezinfo';
import ContractBal from '../../components/Dashboard/ContractBal';

const Dashboard = () => {
 

  
  return (
    <>
    
    <Head>
    <title>REZACLES</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
   <Layout>
    <div className={styles.container}>
    <div className={styles.blackbox}>
   <ContractBal/> 
    <ConnectBtn/>
    </div>
    
    <div className={styles.greybox}>
    <div className='w3-card-4 w3-mobile w3-padding ' style={{borderRadius:"20px",height:"auto",backgroundColor:"#fafafa"}}>
     <BoardCard/>
     <Register/>
  <Level/>
 <Rezinfo/>
      </div>
     
  
    
    </div>

  </div>
  </Layout>
  
</>
  )
}

export default Dashboard