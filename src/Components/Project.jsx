import React from 'react'

const Project = (props) => {
  return (
    <div className='project h-[60vh] w-[25vw]'>
      <div className="imgContainer h-[80%] w-[100%]">
        <img className='h-[100%] w-[100%] object-cover' src={props.img} alt="" />
      </div>
      <div className="projectTextContainer">
        <div className="projectTextContainerTop text-[2.2vw] mb-1 text-white"><h3>{props.heading}</h3></div>
        <div className="projectTextContainerBottom flex gap-4">
          <p className='border-[rgb(255, 250, 240)] border-[0.05vw] rounded-[2vw] text-[1.2vw] px-[1vw] flex items-center justify-center font-normal text-white'>frontEnd</p>
          <p className='border-[rgb(255, 250, 240)] border-[0.05vw] rounded-[2vw] text-[1.2vw] px-[1vw] flex items-center justify-center font-normal text-white'>2024</p>
        </div>
      </div>
    </div>
  )
}

export default Project
