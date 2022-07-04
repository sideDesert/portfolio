import React from 'react'
import {gsap} from 'gsap'
import { useEffect, useRef, forwardRef } from 'react'

const Menu = forwardRef((props, ref)=>{
    let nav = useRef();
    const q = gsap.utils.selector(nav);

    useEffect(()=>{
        gsap.fromTo(q('.list-item'), {
            autoAlpha: 0,
            immediateRender: false,
        }, {
            autoAlpha: 1,
            stagger: 0.2,
            duration: 1,
            delay: 2.5

        })
    },[])

  return (
    <div ref={ref}><nav ref={nav} className='w-full px-6 py-2 fixed md:px-12 md:py-3 lg:py-4  z-20'>
        <ul className='flex md:w-fit  md:float-right column gap-8 justify-center text-md md:justify-end sm:text-lg md:text-xl lg:text-2xl xl:text-3xl relative z-30'>
            <li className='list-item py-2 px-3 rounded-md bg-white/40 backdrop-blur-sm'><a href="#">About</a></li>
            <li className='list-item py-2 px-3 rounded-md bg-white/40 backdrop-blur-sm'><a href="#" className=''>Projects</a> </li>
            <li className='list-item py-2 px-3 rounded-md bg-white/40 backdrop-blur-sm'><a href="#" className='hover:cursor-pointer'>Contact</a></li>
        </ul>
    </nav></div>
  )
})

export default Menu