import React from 'react'
import me from '../../Images/me.png'
import {gsap} from 'gsap'
import { useRef, useEffect } from 'react'

const Landing = React.forwardRef((props, ref)=>{
    let image = useRef();
    let title = useRef();
    let subtitle = useRef();

    let tl = useRef();

    const q = gsap.utils.selector(subtitle);

    
    useEffect(()=>{
        tl.current = gsap.timeline()
        .fromTo(image, {
            autoAlpha: 0,
            x: -30,
            scale: 0.6
        }, {
            autoAlpha: 1,
            duration: 1,
            scale: 1,
            x:0,
            ease: 'power4.inOut'
        })
        .fromTo(title, {

            y:-100,
        }, {
            duration: 1,
            ease: 'bounce.out',
            y: 0
        })
        .fromTo(q('.word'), {
            y: 60,
        },{
            y:0,
            stagger: 0.1,
        })
    });

  return (
    <section ref={ref} className='w-full relative h-screen flex justify-center md:block'>
        <div ref={(el)=>image = el} className='z-0 absolute top-[9rem] w-[275px] sm:w-[25rem] sm:right-0 lg:w-[35rem]'>
            <img src={me}  alt='Memoji' className='animoji'/>
        </div>
        <div className='text-4xl absolute z-10 font-medium bottom-[6rem] text-center sm:text-6xl sm:text-left sm:pl-16 lg:pl-[5rem] lg:text-8xl'>
            <div className='overflow-hidden title'>
                <h2 className='' ref={(el)=>title = el}>
                    Hi! I am Sid.
                </h2>
            </div>
            <div className='overflow-hidden px-5 sm:px-0 subtitle' ref={subtitle}>
                <h2  className='text-2xl sm:text-4xl lg:text-5xl'>
                    <i className = 'word inline-block'>I&nbsp;</i>
                    <i className = 'word inline-block'>am&nbsp;</i> 
                    <i className = 'word inline-block'>a&nbsp;</i> 
                    <i className = 'word inline-block'>front-end&nbsp;</i>
                    <i className = 'word inline-block'>web&nbsp;</i>
                    <i className = 'word inline-block'>developer&nbsp;</i>
                </h2>
            </div>
        </div>
    </section>
  )
})

export default Landing