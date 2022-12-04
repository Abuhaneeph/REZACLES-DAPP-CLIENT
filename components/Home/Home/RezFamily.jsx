import React,{useState} from 'react'
import { Button, message, Steps,Divider} from 'antd';
import Family from './Family';


const RezFamily = () => {

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = Family.map(item => ({ key: item.title, title: item.title }));

  return (
    <>
    <Divider orientation='left' ><h3>Our Family Tree</h3></Divider>
      <Steps className='w3-hide-small w3-margin w3-hide-medium w3-hide-large  w3-margin' style={{color:"purple"}}  current={current} items={items} responsive />
      <div className=" w3-center  w3-container steps-content w3-padding "  style={{backgroundColor:'#fafafa'}}>{Family[current].content}</div>
      <div className=" w3-center  steps-action" style={{backgroundColor:'#fafafa'}}>
      {current > 0 && (
          <Button style={{borderColor:'#8A2BE2',color:"#8A2BE2"}}className='w3-margin' onClick={() => prev()}>
            Previous
          </Button>
        )}
        
        {current === Family.length - 1 && (
          <Button style={{backgroundColor:"#8A2BE2",borderColor:'#8A2BE2'}} className='w3-margin' type="primary" onClick={() => message.success('Thanks for Reading!')}>
            Done
          </Button>
        )}
       

{current < Family.length - 1 && (
          <Button style={{backgroundColor:"#8A2BE2",borderColor:'#8A2BE2'}}  className='w3-margin w3-center' type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
      </div>
    </>

 
  
  )
}

export default RezFamily
