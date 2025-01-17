"use client";
import { useEffect, useRef } from "react";

//gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MotionPathHelper from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
gsap.registerPlugin(MotionPathHelper);

function PathAnimation() {
  const lineRef = useRef<SVGPathElement>(null);
  const carRef = useRef<SVGPathElement>(null);
  const container = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(carRef.current, {
      yPercent: 0,
      xPercent: 20,
      rotate: 30,
    });
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      });

      tl.to(carRef.current, {
        motionPath: {
          path: lineRef.current || "",
          align: lineRef.current || "",
          alignOrigin: [0.2, 0.5],
          autoRotate: true,
          start: 0,
          end: 1,
        },
        ease: "power1.inOut",
      });

      return tl;
    },
    {
      scope: container,
    }
  );

  return (
    <section
      className="py-16 px-4 md:px-2 bg-secondary w-full"
      ref={sectionRef}
    >
      <div className={`max-w-[1250px] w-full mx-auto relative mt-16 mb-20`}>
        <svg
          width="462"
          height="844"
          viewBox="0 0 462 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
          ref={container}
        >
          <path
            ref={lineRef}
            d="M36.4996 18.9999L429.5 253C449.666 265 479 299.9 435 343.5C391 387.1 151 495.333 36.4996 544C12.1662 560.167 -21.9004 602.7 36.4996 643.5C94.8996 684.3 326.5 791.167 435 839.5"
            stroke="#0000FF"
            strokeWidth="8"
          />
          <path
            ref={carRef}
            d="M45.5126 32.8551L52.6609 27.8605C52.8849 27.7015 53.0143 27.5011 53.0633 27.281L68.7632 27.281C71.7233 27.281 74.1201 25.6064 74.1201 23.5405V10.4414C74.1201 8.37307 71.7233 6.69838 68.7632 6.69838L53.0633 6.69838C53.0143 6.4808 52.8849 6.27788 52.6609 6.11897L45.5126 1.12674C44.8442 0.659786 43.6511 0.740459 42.8393 1.3052C42.0311 1.87239 41.9156 2.70852 42.5804 3.17547L47.6259 6.69838L32.9163 6.69838C29.9596 6.69838 27.5593 8.37307 27.5593 10.4414L27.5593 23.5405C27.5593 25.6064 29.9596 27.281 32.9163 27.281L47.6259 27.281L42.5804 30.8088C41.9156 31.2734 42.0311 32.107 42.8393 32.6742C43.6511 33.239 44.8442 33.3196 45.5126 32.8551ZM53.8296 10.3485V11.4388L41.7337 11.4388V10.3485L53.8296 10.3485ZM33.6545 10.3485L38.6546 11.4388L38.6546 22.5406L33.6545 23.6334L33.6545 10.3485ZM41.7337 23.6334V22.5406L53.8296 22.5406L53.8296 23.6334L41.7337 23.6334ZM56.8632 22.5406V11.4388L61.8632 10.3485L61.8632 23.6334L56.8632 22.5406Z"
            fill="#E52A2D"
          />
        </svg>
      </div>
    </section>
  );
}

export default PathAnimation;