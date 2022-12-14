
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Layout } from 'antd';
import Nav from '../components/Home/Nav/Nav';
import  Index from '../components/Home/Home/Index'


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>REZACLES</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
 
<Layout style={{backgroundColor:"white"}}>
<Nav/>
<Index/>
</Layout>




   
    </div>
  )
}
