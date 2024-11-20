import React, { useEffect } from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page1 = () => {
    const { contextSafe } = useGSAP()

    useEffect(() => {
        const marqueeAnim = contextSafe(() => {
            gsap.to(".marqueeText", {
                x: "-90%",
                scrollTrigger: {
                    trigger: ".page-1",
                    // markers: true,
                    start: "13% 10%",
                    end: "bottom 0%",
                    scrub: 2
                }
            })
            gsap.from(".marqueeText p", {
                y: "100%",
                duration:1,
            })
        })
        marqueeAnim()
        const textAnim = contextSafe(() => {
            gsap.from(".bottomText p", {
                y: "-200%",
                stagger: 0.2,
                duration: 1

            })
        })
        textAnim()

    }, [])


    return (
        <div className='page-1 p-3'>
            <Nav />
            <HeroSection />
        </div>
    )
}

export default Page1
