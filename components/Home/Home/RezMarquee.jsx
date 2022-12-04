
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const RezMarquee = () => {
  return (
    <Marquee>
   <div>
    <Image src="/open.png" alt='' width="400" height="200" style={{marginLeft:"70px"}}></Image>
    <Image src="/pol.png" alt='' width="300" height="90" style={{marginLeft:"70px"}}></Image>
   </div>
    </Marquee>
 
  )
}

export default RezMarquee