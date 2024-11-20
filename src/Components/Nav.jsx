import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)


const Nav = () => {

    const { contextSafe } = useGSAP()
    const menuToggleRef = useRef()
    const menuRef = useRef()
    const socialLinks = document.querySelectorAll(".socials p")
    const links = document.querySelectorAll(".link")
    const menuToggle = menuToggleRef.current
    const menu = menuRef.current

    let isAnimating = false

    const menuAim = contextSafe(() => {
        const splitTextIntoSpan = (selector) => {
            let elem = document.querySelectorAll(selector)
            elem.forEach((element) => {
                let text = element.innerText
                let splitText = text.split("").map(function (char) { return `<span>${char === "" ? "&nbsp; &nbsp;" : char}</span>` }).join("");
                element.innerHTML = splitText
            })
        }
        splitTextIntoSpan(".header h1")
    })
    menuAim()

    const menuClickHandler = contextSafe(() => {
        if (isAnimating) return

        if (menuToggle.classList.contains("closed")) {
            menuToggle.classList.remove("closed")
            menuToggle.classList.add("opened")

            isAnimating = true

            gsap.to(menu, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power3.inOut",
                duration: 1.5,
                onStart: () => {
                    menu.style.pointerEvents = "all"
                },
                onComplete: () => {
                    isAnimating = false
                }
            })
            gsap.to(links, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                delay: 0.85,
                ease: "power3.out"
            })

            gsap.to(socialLinks, {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                delay: 0.85,
                duration: 1,
                ease: "power3.out"
            })
            gsap.to(".header h1 span", {
                rotateY: 0,
                stagger: 0.05,
                delay: 0.75,
                duration: 1.5,
                ease: "power4.out"
            })
            gsap.to(".header h1 span", {
                y: 0,
                scale: 1,
                stagger: 0.05,
                delay: 0.5,
                duration: 1.5,
                ease: "power4.out"
            })
        }
        else {
            menuToggle.classList.remove("opened")
            menuToggle.classList.add("closed")

            isAnimating = true

            gsap.to(menu, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                ease: "power3.inOut",
                duration: 1.5,
                onComplete: () => {
                    menu.style.pointerEvents = "none"
                    gsap.set(menu, {
                        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                    })
                    gsap.set(links, {
                        y: 30,
                        opacity: 0
                    })
                    gsap.set(socialLinks, {
                        y: 30,
                        opacity: 0
                    })
                    gsap.set(".header h1 span", {
                        y: 500,
                        rotateY: 90,
                        scale: 0.75
                    })
                    isAnimating = false
                }
            })
        }
    })




    return (
        <>
            <div className="logo"><a href="#">Rahul</a></div>
            <div ref={menuToggleRef} onClick={menuClickHandler} className="menuToggle closed">
                <div className="menuIcon">
                    <div className="hamburger">
                        <div className="menuBar" data-position="top"></div>
                        <div className="menuBar" data-position="bottom"></div>
                    </div>
                </div>
                <div className="menuCopy">
                    <p>Menu</p>
                </div>
            </div>
            <div ref={menuRef} className="menu">
                <div className="column column1">
                    <div className="menuLogo"><a href="#">Rahul</a></div>
                    <div className="links">
                        <div className="link"><a href="#">Projects</a></div>
                        <div className="link"><a href="#">Contacts</a></div>
                    </div>
                </div>
                <div className="column column2">
                    <div className="socials">
                        <div className="subCol">
                            <p>Rahul</p>
                            <p>KOlkata</p>
                            <p>rahul144@gmail.com</p>
                        </div>
                        <div className="subCol">
                            <p>LinkdIn</p>
                            <p>GitHub</p>
                            <p>8334858972</p>
                        </div>
                    </div>
                    <div className="header">
                        <h1>Creative</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
