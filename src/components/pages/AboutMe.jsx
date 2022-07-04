import React from 'react'
import me from '../../Images/me1-bw.png';
import ImageReveal from '../ImageReveal';

const  AboutMe = React.forwardRef((props, ref)=>{
  const {refContainer , refImg} = ref;
  return (
    <section ref={refContainer}>
        <h2 className='text-4xl font-medium text-center sm:text-5xl lg:text-7xl lg:hidden title'>About Me</h2>
        <div className="container-1">
            <div ref = {refImg} className='sm:float-left w-full flex justify-center sm:inline-block relative sm:w-fit image overflow-hidden z-10'>
                <img src={me} alt="An image of me" className=' w-[15rem]  sm:w-80 lg:w-[25rem] '/>
                {/* <ImageReveal image={me}/> */}
            </div>
            <div className='p-6 md:p-8 text-lg sm:text-xl md:text-xl lg:text-2xl lg:h-[600px] lg:flex lg:flex-col lg:justify-center'>
                <h2 className='text-4xl font-medium text-left sm:text-5xl lg:text-7xl hidden lg:block translate-y-[-30px]'>About Me</h2>
              <div class="text-container z-0">
                    <p className='para'>Hi! My name is Siddarth Saha. I am a front-end web developer from New Delhi, currently pursuing my Bachelors in Civil Engineering from IIT Hyderabad.</p> 
                    <p className='pt-3 para'> I have been coding since 9th grade and am well versed with React, JavaScript, CSS. I have worked with Material UI, Tailwind CSS, GSAP, and I work with the MERN Stack for Full Stack Applications. </p> 
                    <p className='pt-3 para'>I am extremely passionate about Front-end web development! I am constantly learning about new technologies and frameworks and methods to improve my skills. I hope you like my work!</p>
              </div>
              </div>
        </div>
    </section>
  )
}
)
export default AboutMe