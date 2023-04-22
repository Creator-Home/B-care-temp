import Navbar1 from './Navbar1'
import React from 'react'
import doc5 from "./doc5.svg"
import head2 from "./head2.png"
import frame1 from './frame1.svg'
import svg1 from "./is it right for you.svg";
 import user1 from "./user1.png";
 import user2 from "./user2.png";
 import user3 from "./user3.png";
import UserImg from './UserImg'
function UserPage() {
  return (
   <>
   <Navbar1/>
   <div className='flex' >
   <div className='w-3/4 mt-24 mx-0'>
    <img className="@apply flex flex-row items-start gap-[30px] absolute w-[438px] h-[466px] p-0 left-[21px] top-[72px];
}" src={doc5} ></img>
    
   </div>
   <div className='w-1/2 mt-48'>
    
    <h2 className=' @apply not-italic font-extrabold text-[58px] leading-[77px];
  font-family: "Playfair Display" text-pink-600 w-[976px] h-[77px] ml-20' mx-16 >~Yes it is curable if diagnosed early. </h2>
   </div>
   </div>
   {/* style={{backgroundImage: `url(${frame1})` }} */}
   <div className='bg-no-repeat  mt-24 @apply w-[1440px] h-[944px] left-0 top-0'style={{backgroundImage: `url(${frame1})` }} >
   <div className='flex'>
   <UserImg user = {user1} step="STEP-1" head="SELF CHECK" content="lorem inpsum lorrem ipsum lorem ipsum"/>
   <UserImg user = {user2} step="STEP-2" head="BREAST CANCER PATIENTS" content="lorem inpsum lorrem ipsum lorem ipsum"/>
   <UserImg user = {user3} step="STEP-3" head="AFTER MASTECTOMY" content="lorem inpsum lorrem ipsum lorem ipsum" />
   </div>
   </div>


    {/* <div className='w-1/2 mt-24 @apply w-[1440px] h-[944px] left-0 top-0'style={{backgroundImage: `url(${frame1})` }} >
    <div className='flex'>
        <div>
    <h1 className='ml-24 pt-32 @apply  italic font-normal text-[40px] leading-[60px] tracking-widest text-[rgba(255,255,255,0.85)]
  font-family: "DM Serif Display"'>Step-1</h1>
   <h2 className=' ml-24 @apply w-[311px] h-14 not-italic font-normal text-3xl leading-[60px] tracking-widest text-[#80265E] 
  font-family: "DM Serif Display"'>SELF CHECK</h2>
   <p className='ml-20 @apply w-[574px] h-[60px] not-italic font-medium text-xl leading-[30px] tracking-widest text-white  
  font-family: "Poppins"'>do check your brreast daily </p>
  <button className='ml-28 @apply box-border w-[110px] h-10 border shadow-[0px_4px_40px_rgba(177,146,65,0.6)] rounded-[10px] border-solid border-[rgba(255,255,255,0.85)]  
  background: linear-gradient(90deg, #e3008d 0%, #fba9d8 48.46%, #ec52b2 100%)'>check now</button>
  </div>
   <div className='@apply w-1/4  h-[265px] left-[839px] top-[466px];'>
    <img src={user1}></img>
   </div>
   </div>
 </div> */}
  
   <div className="-mt-16">
    <img className="@apply w-[1440px] h-[912.93px] left-0 top-0;" src={svg1} ></img>
   </div>
   </>
  )
}

export default UserPage