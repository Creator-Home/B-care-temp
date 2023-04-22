import React from 'react'
import step1 from "./bstep1.webp";
import step2 from "./bstep2.webp";
import step3 from "./bstep3.webp";
import step4 from "./bstep4.webp";
import step5 from "./bstep5.webp";
import bg3 from "./Rectangle 28.svg";
import '../index.css';
function Guide() {
  return (
    <>
        <div>
        <h1 className="text-5xl text-black  mx-96 mr-32 my-5 hover:decoration-dashed font-sans">Your One Stop Guide For Breast</h1>
        </div>
        <div className="@apply absolute w-[1191px] h-[618px] left-[108px] top-[1868px] bg-pink-400"style={{backgroundImage: `url(${bg3})` }}>
            
                <h1 className=' @apply w-[569px] h-[234px] not-italic font-bold text-[41px] leading-[62px] text-black left-[162px] top-[1910px];
  font-family: "Poppins"'>Health always begins with a healthy life style. Being healthy will makes you happier.</h1>
             <div className='flex'>
             <div className='flex'>
                <div>
                  <h1 className='@apply absolute w-[142.97px] h-[30px] not-italic font-bold text-[98px] leading-[30px] text-white left-[118px] top-[2294px];
  font-family: "Poppins"'>01</h1>
                  </div>
                <div>
             <p className='@apply absolute w-[467.28px] h-9 not-italic font-bold text-2xl leading-9 text-white left-[260.97px] top-[2236px];
  font-family: "Poppins"'>Keep Your Health Record On track</p>
             <p className=''>Keep Your Health Record On track</p>
             <button>check now</button>
                </div>
             </div>
             <div className='flex'>
                <div>
                  <h1 className='text-5xl'>01</h1>
                  </div>
                <div>
             <p>Keep Your Health Record On track</p>
             <p>Keep Your Health Record On track</p>
             <button>check now</button>
                </div>
             </div>
             </div>
        </div>
        
             
         
            
      
  
     </>
  )
}

export default Guide