import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)


const Footer = () => {

    const { contextSafe } = useGSAP()

    useEffect(() => {
        const footerAnim = contextSafe(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".footer",
                    start: "top 100%",
                    end: "50% 100%",
                    // markers: true,
                    scrub: 2
                }
            })
            tl
                .to(".box:nth-child(1)", {
                    y: "0%",
                }, "anim")
                .to(".box:nth-child(2)", {
                    y: "-30%",
                }, "anim")
                .to(".box:nth-child(3)", {
                    y: "-60%",
                }, "anim")
                .to(".box:nth-child(4)", {
                    y: "-90%",
                }, "anim")
                .to(".box:nth-child(5)", {
                    y: "-40%",
                }, "anim")

        })
        footerAnim()

    }, [])

    return (
        <div className='footer h-[50vh]'>
            <div className="footerBoxAimTop h-[20vh] w-[100%] flex">
                <div className="box w-[20%] bg-[#fffaf0] h-[100%]"></div>
                <div className="box w-[20%] bg-[#fffaf0] h-[100%]"></div>
                <div className="box w-[20%] bg-[#fffaf0] h-[100%]"></div>
                <div className="box w-[20%] bg-[#fffaf0] h-[100%]"></div>
                <div className="box w-[20%] bg-[#fffaf0] h-[100%]"></div>
            </div>
            <div className="footerBottom h-[100%] w-[100%] flex border-t-[0.05vw] border-black -translate-y-7">
                <div className="footerLeft h-[100%] w-[50%] p-[3vw] flex flex-col gap-3">
                    <div className="h1Wrapper text-[6vw] tracking-[-0.2vw] leading-[5vw]">
                        <h1>Contact me for</h1>
                        <h1>collaboration</h1>
                    </div>
                    <p className='text-[1.4vw]'>Reach out today to discuss your project <br /> need and start collaborating on <br />
                        something amazing!</p>
                </div>
                <div className="footerRight h-[100%] w-[50%] pt-[5vw]">
                    <form action="https://getform.io/f/aejjleyb" className='flex flex-col justify-center items-center gap-[2vw]' method='POST'>
                        <div className=" flex flex-col gap-[2vw]">
                            <div className="flex items-center justify-center">
                                <label htmlFor="name" className='label mr-3 text-[2vw] font-light'>Name</label>
                                <input type="text" name='name' id='name' autoComplete='name' required placeholder='Rahul' className='textField border-[0.05vw] border-black rounded-md bg-transparent' />
                            </div>
                            <div className="flex items-center justify-center">
                                <label htmlFor="email" className='label mr-3 text-[2vw] font-light'>Email</label>
                                <input type="email" name='email' id='email' autoComplete='email' required placeholder='User@gmail.com' className='emailField border-[0.05vw] border-black rounded-md bg-transparent' />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <label htmlFor="message" className='label mr-3 text-[2vw] font-light'>Message</label>
                            <textarea name="message" id="message" className='textField border-[0.05vw] border-black rounded-md bg-transparent' required placeholder='Hiiii'></textarea>
                        </div>
                        <button type="submit" className='border-[0.1vw] border-black px-3 py-1 rounded-2xl w-[6vw] flex justify-center items-center'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
