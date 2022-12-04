import React from 'react'
import RezGrid from './RezGrid'
import FAQ from './FAQ'
import RezSteps from './RezSteps'
import RezMarquee from './RezMarquee'
import RezFamily from './RezFamily'



const Index = () => {                
  return (
    <>
    <div className='bg' >
      <div className='w3-center w3-text-black w3-padding-32' >  
<h3 style={{fontFamily:"Times New Roman, Times, serif",fontSize:"32px"}}>
        Rezacles Protocol
  </h3>
    <p>Referral-based staking pool that has unique compensation plan that reward members for onboarding new users into the community</p>                             

   
      </div>
      
    
 </div>
 <RezGrid/> 
<RezFamily/>
<RezSteps/>
<RezMarquee/>
<FAQ/>

 </>
  )
}

export default Index