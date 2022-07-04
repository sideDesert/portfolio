import React, { useLayoutEffect } from 'react';
import './App.scss';
import AboutMe from './components/pages/AboutMe';
import Landing from './components/pages/Landing'
import Menu from './components/pages/Menu';
import { useRef } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Projects from './components/pages/Projects';

gsap.registerPlugin(ScrollTrigger);

function App() {

  let landing = useRef()
  const landingq = gsap.utils.selector(landing);
  let aboutMe = useRef();
  const aboutMeq = gsap.utils.selector(aboutMe);
  const heroImg = useRef();

  useLayoutEffect(()=>{
    //need to fix imageHeight
    let imageHeight = heroImg.current.offsetHeight;
    console.log(imageHeight);

    //For Hi I am Sid to dissapear
    gsap.fromTo([landingq('.title'), landingq('.subtitle')], {
      autoAlpha: 1,
      y:0
    }, {
      autoAlpha: 0,
      y:-30,
      scrollTrigger:{
        trigger: landingq('.title'),
        scrub: true,
        start: 'bottom center',
      }
    })

//For Hero Image
    gsap.fromTo(aboutMeq('.image'), {
      x: -300,
      scale: 1.4,
    }, {
      x: 0,
      scale: 1,
      scrollTrigger: {
        trigger: aboutMeq('.image'),
        scrub: true,
        start: '120px bottom',
        end: ()=> 'bottom bottom',
      }
    })
    //About me text reveal
    gsap.fromTo(aboutMeq('.text-container'), {
      x: -800,
      scale:0.8
    }, {
      x: 0,
      scale: 1,
      scrollTrigger: {
        trigger: aboutMeq('.image'),
        scrub: 1,
        start: '120px bottom',
        end: 'bottom bottom',
      },
    })
  },[]);

  return (
    <>
      <Menu/>
      <Landing ref={landing}/>
      <AboutMe ref = {{refContainer: aboutMe, refImg: heroImg}}/>
      <Projects/>
    </>
  );
}

export default App;
