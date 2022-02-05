import React, { useRef, useEffect } from 'react';
import { SectionSix, LeftContent, RightContent, Text } from './Styles';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import man from '../../assets/images/man.png'
import car from '../../assets/images/car1.png'
import arrow from '../../assets/images/arrow-right.svg'

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {

  const left = useRef(null)
  const manRef = useRef(null)
  const carRef = useRef(null)
  const right = useRef(null)

  useEffect(() => {
    gsap.fromTo(left.current, {
      width: '0%'
    }, {
      width: '50%',
      duration: 1,
      scrollTrigger: manRef.current,
      onComplete: () => {
        manAnimation()
        carAnimation()
        rightAnimation()
      }
    })
  }, []);

  const manAnimation = () => {
    gsap.to(manRef.current, {
      left: '25%',
      opacity: 1,
      duration: 0.5,
    })
  }

  const carAnimation = () => {
    gsap.to(carRef.current, {
      left: '35%',
      opacity: 1,
      duration: 0.8,
    })
  }

  const rightAnimation = () => {
    gsap.fromTo(right.current, {
      y: '-200',
      opacity: 0,
    }, {
      y: '0',
      opacity: 1,
      duration: 1,
    })
  }

  return (
    <SectionSix> 
        <LeftContent ref={left}>
            <img ref={manRef} src={man} />
            <img ref={carRef} src={car} />
        </LeftContent>
        <RightContent ref={right}>
            <Text>
                <h2>Customers with that new car smell</h2>
                <p>“With Eleanor I was able to drive 
                2 of my dream cars this year! The process is 
                always easy and affordable!”</p>
                <p>Alex Bateman, Interface Designer</p>
                <hr />
                <span><p>Available On the App</p><img src={arrow} /></span>
            </Text>
        </RightContent>
    </SectionSix>
  )
}

export default Section6