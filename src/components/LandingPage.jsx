import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-52 px-20">
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
            return <div className='masker'>
                <div className='w-fit flex '>
                    {index === 1 && <div className='mr-[0.5vw]  rounded-md w-[9vw] overflow-hidden relative top-[1.2vw] h-[5.6vw] bg-green-500'>
                     <img className='h-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                      </div>}
                <h1 className='uppercase text-9xl leading-[7vw]  font-["Test_Founders_Grotesk_X-Condensed"]'>{item}</h1>
            </div>
            </div>
        })}
      </div>

      <div className='border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full hover:text-black hover:bg-white hover:cursor-wait'>start the project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full hover:bg-white'>
                <span className='rotate-[45deg]  '>
                <FaArrowUpLong />
                </span>
                </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
