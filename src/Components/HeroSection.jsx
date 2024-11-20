
import React, { useRef,useEffect } from 'react'


const HeroSection = () => {


    return (
        <div className='heroSection flex flex-col justify-between h-[45vw] border-b-[0.1vw] border-black w-[100%] mt-[5vw]'>
            <div className="marquee w-[100%] h-[30vw] overflow-hidden">
                <div className="marqueeText text-[25.5vw] h-[50vw] w-[305%] flex  -tracking-[1.5vw] font-light">
                    <h1 className='uppercase cursor-pointer w-[100%]'><p>creative visual developer</p></h1>
                </div>
            </div>
            <div className="bottomText w-[100%] p-2 pb-5 uppercase text-[1.3vw] text-right tracking-tight leading-[1.5vw] ">
                <h3 className='overflow-hidden'><p>pretty IS good & UGLY IS TOO, as long as it has MEANING.</p></h3>
                <h3 className='overflow-hidden'><p>my purpose is to find it and to make it visual.</p></h3>
            </div>
        </div>
    )
}

export default HeroSection
