import React from "react"
import Typewriter from "typewriter-effect";
 import selfCheck1 from "./selfcheck1.avif";
import '../index.css';
function SelfCheck(){
    return (
        <>
        <div className="w-full p-20 bg-white-100  flex">
            <div className=" w-1/2 p-4 flex flex-col  justify-center">
              <h1 className='absolute flex items-end text-red-400  font-normal font-AksaraBaliGalang text-5xl'> You  are </h1>
               
                <h1 className='absolute flex items-end text-red-600 mx-48 font-normal font-AksaraBaliGalang text-5xl '>
                <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Strong.")

                    .pauseFor(1000)
                    .deleteAll()
                     
                    
                    .typeString("in control.")

                    .pauseFor(1000)
                    .deleteAll()
                    
                    .typeString("worth it.")

                    .pauseFor(1000)
                    .deleteAll()
                    
                    .typeString("Proactive.")

                    .pauseFor(1000)
                    .deleteAll()

                    .start();
                }}
              />
              </h1>
              <button className="mt-48 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-0 rounded-full">Get Started</button>
              
              
            </div>
         
            <div>
            <img className="w-1/2 p-4 w-fit h-700" src={selfCheck1}></img>
            </div>
        </div>
        </>
    )
}

export default SelfCheck;