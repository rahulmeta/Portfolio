import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useState } from 'react'
import Project from './Project'

gsap.registerPlugin(ScrollTrigger)

const Works = () => {
    const [img, setimg] = useState([
        "src/assets/imgs/brandbeetPic.jpg",
        "src/assets/imgs/sundownStudioPic.jpg",
        "src/assets/imgs/ochipic.jpeg",
        "src/assets/imgs/rejoice.jpeg",
        "src/assets/imgs/refixStudio.png"
    ])
    const [heading, setheading] = useState([
        "BrandBeet",
        "Sundown",
        "OchiDesign",
        "Rejouice",
        "RefixStudio"
    ])

    const { contextSafe } = useGSAP()
    useEffect(() => {
        const anim = contextSafe(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".startingContainer",
                    // markers: true,
                    start: "top 0%",
                    end: "150% bottom",
                    scrub: 2,
                    pin: true
                }
            })
            tl
                .to(".coverDiv", {
                    width: "100%",
                    borderRadius: "0"
                }, "anim")
                .to(".startingContainer", {
                    paddingRight: "0",
                    paddingLeft: "0",
                    paddingTop: "0",
                    paddingBottom: "0"
                }, "anim")
                .to(".textDiv", {
                    color: "white"
                }, "anim")
                .to(".para", {
                    display: "block",
                    stagger: 0.05
                }, "anim")
        })
        anim()

        const workAnim = contextSafe(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".wrapperdiv",
                    start: "top top",
                    end: "bottom 58%",
                    scrub: 2,
                    // markers: true,
                    pin: true
                }
            })
            tl
                .to(".projects", {
                    y: "-450%",
                }, "anim")
                .to(".workContainer h1", {
                    fontSize: "13vw",
                    lineHeight: "5vw"
                }, "anim")
        })
        workAnim()
    }, [])


    return (
        <>
            <div className='startingContainer min-h-[100vh] w-[100%] mt-[3vw]'>
                <div className="wrapperDiv h-[100vh] w-[100%] relative text-black ">
                    <div className="coverDiv h-[100vh] w-[0%] bg-black rounded-[2vw] absolute "></div>
                    <div className="textDiv h-[100vh] w-[100%] flex justify-center items-center absolute ">
                        <div className="paraContainer flex items-center gap-[0.7vw] text-[4vw]">
                            <p>NEXT,</p><p className='hidden para'>LET'S</p><p className='hidden para'>TAKE</p><p className='hidden para'>A</p><p className='hidden para'>LOOK</p><p className='hidden para'>AT</p><p className='hidden para font-extrabold text-[5vw]'>MY</p><p className='hidden para font-extrabold text-[5vw]'>WORKS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapperdiv h-[100vh] w-[100%] relative overflow-hidden">
                <div className="workContainer bg-black h-[100vh] text-white w-[100%] flex flex-col items-center justify-center text-[15vw] leading-[10vw] tracking-tighter cursor-pointer absolute">
                    <h1>SELECTED</h1>
                    <h1>PROJECTS</h1>
                </div>
                <div className="projects absolute top-[60%] h-[100vh] w-[100%]">
                    <div className="row flex items-end justify-end pr-[13vw]"><Project img={img[0]}  heading={heading[0]}/></div>
                    <div className="row pl-[8vw]"><Project img={img[1]}  heading={heading[1]}/></div>
                    <div className="row flex justify-center pl-[25vw]"><Project img={img[2]}  heading={heading[2]}/></div>
                    <div className="row flex justify-start pl-[2vw]"><Project img={img[3]} heading={heading[3]}/></div>
                    <div className="row flex justify-center pl-[2vw]"><Project img={img[4]} heading={heading[4]}/></div>
                </div>
            </div>

        </>
    )
}

export default Works
