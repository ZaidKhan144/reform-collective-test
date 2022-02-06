import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

import { SectionOne, LeftContent, Logo , Text, CarImages, Car1, Car2, Car3, RightContent } from './Styles'

import LogoSrc from '../../assets/images/logo-white.svg'
import arrow from '../../assets/images/arrow-right.svg'
import car1 from '../../assets/images/car1.png'
import car2 from '../../assets/images/car2.png'
import car3 from '../../assets/images/car3.png'
import phoneScreen from '../../assets/images/phone-sec1.png'


const Section1 = (props) => {

    const yellowBackground = useRef(null)
    const cars = useRef(null)
    const text = useRef(null)
    const phone = useRef(null)

    useEffect(() => {
        gsap.set(cars.current, { clearProps: "all"})

        if(!props.mobileWidth) {
            yellowAnimation();
            carsAnimation();
        }
         
    }, [props.mobileWidth]);
    
    const yellowAnimation = () => {
        gsap.from(yellowBackground.current, { 
            duration: 0.5, 
            width: '0%'
        })
    }

    const carsAnimation = () => {
        gsap.from(cars.current, {
            duration: 0.5,
            delay: 0.2,
            left: '-100%',
            onComplete: () => {
                textAnimation()
                phoneAnimation()
            }
        })
    }

    const textAnimation = () => {
        gsap.to(text.current, {
            top: '90px',
            opacity: 1,
            duration: 0.5,
        })
    }

    const phoneAnimation = () => {
        gsap.to(phone.current, {
            right: '135px',
            duration: 0.5,
            opacity: 1
        })
    }

    return (
        <SectionOne ref={yellowBackground}>
            <LeftContent>
                <Logo src={LogoSrc} />
                <Text ref={text}>
                    <h1>Drive a new car every month.</h1>
                    <span><p>Available On the App</p><img src={arrow}/></span>
                </Text>
                <CarImages ref={cars}>
                    <Car2 src={car2} />
                    <Car3 src={car3} />
                    <Car1 src={car1} />
                </CarImages>
            </LeftContent>
            <RightContent>
                <img src={phoneScreen} ref={phone} />
            </RightContent>
        </SectionOne>
    )
}

export default Section1