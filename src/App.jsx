import React, { useEffect, useRef, useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import gsap from 'gsap'
import Footer from './Components/Footer'


const App = () => {


  const lenis = useLenis(({ scroll }) => {
  })

 


  return (
    <ReactLenis root>
      <Page1 />
      <Page2 />
      <Page3 />
    <Footer/>
    </ReactLenis>
  )
}


export default App