import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionFour, LeftContent, RightContent, Text } from './Styles';

import car from '../../assets/images/car5.png'
import phoneScreen from '../../assets/images/phone-sec4.png'

gsap.registerPlugin(ScrollTrigger);

const Section4 = (props) => {

  const left = useRef(null)
  const phone = useRef(null)
  const title = useRef(null)
  const text = useRef(null)

  useEffect(() => {
    if(!props.mobileWidth) {
      gsap.fromTo(left.current, {
        width: '0%',
      }, {
        duration: 1,
        width: '35%',
        scrollTrigger: phone.current,
        clearProps: "all",
        onComplete: () => {
          phoneAnimation()
        }
      })
    } else {
      gsap.set(left.current, {
        width: '80%'
      })
      gsap.set(phone.current, {
        clearProps: "all",
      })
    }
  }, [props.mobileWidth]);

  const phoneAnimation = () => {
    gsap.to(phone.current, {
      top: '11%',
      duration: 0.5,
      opacity: 1,
      onComplete: () => {
        titleAnimation()
      }
    })
  }

  const titleAnimation = () => {
    gsap.fromTo(title.current, {
      y: '-200',
      opacity: 0.5,
    }, {
      y: '0',
      duration: 1,
      opacity: 1,
      onComplete: () => {
        textAnimation()
      }
    })
  }

  const textAnimation = () => {
    gsap.fromTo(text.current, {
      y: '-100',
      opacity: 0.5,
    }, {
      y: '0',
      duration: 1,
      opacity: 1,
    })
  }
  
  return (
    <SectionFour>
        <LeftContent ref={left}>
          <img src={car} />
          <img ref={phone} src={phoneScreen} />
        </LeftContent>
        <RightContent>
            <Text>
              <h2 ref={title}>Trade in your car every month.</h2>
              <p ref={text}>Use Eleanor Trade-In Credits to trade 
              in your vehicle for something else in our luxurious inventory. 
              Nothing says “June” like a new car!</p>
            </Text>
        </RightContent>
    </SectionFour>
  )
}

export default Section4;