import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { LeftContent, SectionThree, Text, RightContent } from './Styles';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import map from '../../assets/images/map.png'
import car from '../../assets/images/car3.png'
import delivery from '../../assets/images/delivery.png'

gsap.registerPlugin(ScrollTrigger);

const Section3 = (props) => {

  const mapRef = useRef(null)
  const title = useRef(null)
  const text = useRef(null)
  const carRef = useRef(null)
  const phone = useRef(null)
  
  useEffect(() => {
    if(!props.mobileWidth) {
      gsap.fromTo(mapRef.current, {
        width: '0%',
      }, {
        duration: 1,
        width: '100%',
        clearProps: "all",
        scrollTrigger: mapRef.current
      })
      gsap.from(title.current, {
        y: '-200',
        scrollTrigger: title.current,
        duration: 1,
        opacity: 0.5,
        onComplete: () => {
          textAnimation()
          carAnimation()
          phoneAnimation()
        }
      })
    } else {
      gsap.set(title.current, {
        y: '0',
        display: 'block',
        opacity: 1,
      })
      gsap.set(mapRef.current, {
        width: 'calc(100% + 20px + 20px)'
      })
    }
  }, [props.mobileWidth]);

  const textAnimation = () => {
    gsap.fromTo(text.current, {
      y: '-100',
      opacity: 0.5,
    }, {
      y: '0',
      opacity: 1,
      duration: 1,
      clearProps: "all",
    })
  }

  const carAnimation = () => {
    gsap.to(carRef.current, {
      left: '-40%',
      opacity: 1,
      duration: 0.5
    })
  }

  const phoneAnimation = () => {
    gsap.to(phone.current, {
      top: '-15%',
      duration: 0.5,
      delay: 1,
      opacity: 1
    })
  }
  
  return (
    <SectionThree>
        <LeftContent>
            <Text>
                <h2 ref={title}>Delivered to your door.</h2>
                <p ref={text}>Eleanor works with your schedule 
                to have a white-glove delivery service deliver 
                your new vehicle right to your door.</p>
            </Text>
        </LeftContent>
        <RightContent>
            <img ref={mapRef} src={map} />
            <img ref={carRef} src={car} />
            <img ref={phone} src={delivery} />
        </RightContent>
    </SectionThree>
  )
}

export default Section3