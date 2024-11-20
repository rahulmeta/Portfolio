import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'

const Support = () => {
    const cursorRef = useRef();
    const containerRef = useRef();
    const { contextSafe } = useGSAP();

    useEffect(() => {
        const moveAnimHandler = contextSafe((event) => {
            gsap.to(cursorRef.current, {
                left: event.x,
                top: event.y,
                duration: 0.5, // adding a smooth animation duration
            });
        });

        const onMouseEnter = () => {
            gsap.to(cursorRef.current, { scale: 1 });
        };

        const onMouseLeave = () => {
            gsap.to(cursorRef.current, { scale: 0 });
        };

        window.addEventListener("mousemove", moveAnimHandler);
        const containerEl = containerRef.current;

        containerEl?.addEventListener("mouseenter", onMouseEnter);
        containerEl?.addEventListener("mouseleave", onMouseLeave);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("mousemove", moveAnimHandler);
            containerEl?.removeEventListener("mouseenter", onMouseEnter);
            containerEl?.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [contextSafe]);
    const col1mouseneter = contextSafe(() => {
        const img = document.querySelector(".cursor").firstElementChild
        img.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGhhejZyYW16bXYyN3h2c3BqYjRxY3hrcGp1Nzl3N2Q5MHp1ZnUwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vyTnNTrs3wqQ0UIvwE/giphy.gif"
    })
    const col2mouseneter = contextSafe(() => {
        const img = document.querySelector(".cursor").firstElementChild
        img.src = "https://i.giphy.com/vtoXcFYTu4aSrdtTxK.webp"
    })
    const col3mouseneter = contextSafe(() => {
        const img = document.querySelector(".cursor").firstElementChild
        img.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb21iZ3liOGpoZHNsa3dlNXlzMzM4anV3djZyNWFtMTU0azdncmdicyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ySlraQoZhmeUskuOX5/giphy.webp"
    })
    const col4mouseneter = contextSafe(() => {
        const img = document.querySelector(".cursor").firstElementChild
        img.src = "https://i.giphy.com/esR1eKgmOnxWKR627f.webp"
    })




    return (
        <>

            <div ref={containerRef} className='supportContainer h-[100vh] w-[100%] border-black border-t-[0.02vw] flex flex-col items-center justify-between'>
                <div ref={cursorRef} className="cursor scale-0 h-[15vw] w-[15vw] fixed  -translate-x-[50%] -translate-y-[50%]">
                    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGhhejZyYW16bXYyN3h2c3BqYjRxY3hrcGp1Nzl3N2Q5MHp1ZnUwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vyTnNTrs3wqQ0UIvwE/giphy.gif" alt="" />
                </div>
                <h3 className='text-[1vw] font-semibold'>I'm here for you</h3>
                <div className="wrapperContainer h-[85%] w-[100%] flex">
                    <div onMouseEnter={col1mouseneter} className="col col1 flex items-end justify-start px-5 py-10 border-[#e3e3e3] border-r-[0.1vw] h-[100%] w-[25%]">
                        <div className="colContainer">
                            <div className="round mb-4 px-2 py-2 w-[3vw] text-center border-[#e3e3e3] border-[0.05vw] rounded-[50%]">A</div>
                            <div className="supportText">
                                <h3 className='text-white mix-blend-difference font-bold text-[2vw] tracking-tight leading-[2vw]'>Project<br />Execution<br />Missed a<br />Deadlines</h3>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={col2mouseneter} className="col col2 flex items-center px-5 py-5 border-[#e3e3e3] border-r-[0.1vw] h-[100%] w-[25%]">
                        <div className="colContainer">
                            <div className="round mb-4 px-2 py-2 w-[3vw] text-center border-[#e3e3e3] border-[0.05vw] rounded-[50%]">B</div>
                            <div className="supportText">
                                <h3 className='text-white mix-blend-difference font-bold text-[2vw] tracking-tight leading-[2vw]'>Managers<br />are lost</h3>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={col3mouseneter} className="col col3 px-5 py-5 border-[#e3e3e3] border-r-[0.1vw] h-[100%] w-[25%]">
                        <div className="colContainer">
                            <div className="round mb-4 px-2 py-2 w-[3vw] text-center border-[#e3e3e3] border-[0.05vw] rounded-[50%]">C</div>
                            <div className="supportText">
                                <h3 className='text-white mix-blend-difference font-bold text-[2vw] tracking-tight leading-[2vw]'>Afraid of<br />Strange<br />Contractors </h3>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={col4mouseneter} className="col col4 px-5 py-5 flex items-center border-[#e3e3e3] border-r-[0.1vw] h-[100%] w-[25%]">
                        <div className="colContainer">
                            <div className="round mb-4 px-2 py-2 w-[3vw] text-center border-[#e3e3e3] border-[0.05vw] rounded-[50%]">D</div>
                            <div className="supportText">
                                <h3 className='text-white mix-blend-difference font-bold text-[2vw] tracking-tight leading-[2vw]'>You need the<br />Better<br />Quality</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Support

