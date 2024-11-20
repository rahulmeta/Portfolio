import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Intro from './Intro'
import Support from './Support'

gsap.registerPlugin(ScrollTrigger)

const Page2 = () => {

    const { contextSafe } = useGSAP()

    useEffect(() => {

        const introTextAnim = contextSafe(() => {
            gsap.from(".introContainer p", {
                y: "300%",
                stagger: 0.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: ".introContainer",
                    // markers:true,
                    start: "top 80%",
                    end: "100% 90%",
                    scrub: 1
                }
            })
        })
        introTextAnim()

    }, [])

    return (
        <div className='page-2 min-h-[100vh] w-[100%]'>
            <Intro />
            <Support/>
        </div>
    )
}

export default Page2
