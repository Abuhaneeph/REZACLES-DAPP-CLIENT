import React,{useState} from 'react'
import { Button, Drawer, Divider, Space } from 'antd';
import {MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const bg={
  
  background: "radial-gradient(66.32% 66.32% at 54.13% 113.95%,rgba(108,38,255,.2) 0,rgba(242,89,255,0) 100%),linear-gradient(211.99deg,rgba(65,157,241,.2) -4.17%,rgba(45,143,234,0) 68.7%),radial-gradient(100% 100% at 28.65% 0,rgba(109,0,255,.25) 0,rgba(250,247,254,0) 100%)",
}

const Nav = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    
       <>
    <div style={{backgroundColor:'#fafafa'}}  className="Nav">
      <h2 className='w3-left'style={{color:"#8A2BE2"}}>Rezacles</h2>
      <Button className='w3-right  w3-margin w3-border-color-purple' icon={<MenuOutlined className='w3-hover-border-purple'  style={{color:"#8A2BE2"}} />} type="circle" onClick={showDrawer}/>
      <Drawer headerStyle={{backgroundColor:"#fafafa"}}  bodyStyle={bg} placement="right" onClose={onClose} open={open}>
        <div className='w3-center'>
        <Button type='primary' style={bg} onClick={() => router.push('/Dashboard')}>Launch App</Button>
        </div>
       
        <Divider style={{color:"purple"}}/>
       
      
       <div className='w3-bottom'>
       <Divider orientation='center'>Rezacles</Divider>
       </div>
        
      </Drawer>
    
    </div>

    </>     
      
      
    
  )
}

export default Nav
      