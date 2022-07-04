import React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function ImageReveal({ image }) {
  let containerRef = useRef(null);
  let imageRef = useRef(null);
  let tl = gsap.timeline({
    delay: 0.5,
  });

  useEffect(() => {
    tl.to(".container", {
      "--width": 0,
      ease: "inOut",
      duration: 1.8,
    });
    tl.from(
      imageRef,
      {
        duration: 1.8,
        ease: "inOut",
        scale: 1.6,
        delay: -1,
      },
      1
    );
  }, [tl]);
  return (
    <>
      <div
        ref={(el) => (containerRef = el)}
        className="container w-[60vw] overflow-hidden h-[500px] mx-7 relative"
      >
        <img
          ref={(el) => (imageRef = el)}
          src={image}
          alt="Landscape"
          className="mt-[-90px] relative z-0"
        />
      </div>
    </>
  );
}

export default ImageReveal;
