import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { SectionTwo, LeftContent, Arrows, CarCarousel, CarDesc, CarConfig, Car, RightContent, Text } from './Styles'

import arrowPrev from '../../assets/images/arrow-left.svg'
import arrowNext from '../../assets/images/arrow-right.svg'
import mpgImage from '../../assets/images/mpg.svg'
import hpImage from '../../assets/images/hp.svg'
import accImage from '../../assets/images/acc-meter.svg'
import landRover from '../../assets/images/car4.png'
import porsche from '../../assets/images/car3.png'

gsap.registerPlugin(ScrollTrigger);

const carInfo = [
    {
        carName: 'Land Rover',
        model: '2019 - RANGE ROVER VELAR',
        mpg: '19/24',
        hp: '397',
        accMeter: '4.2',
        image: landRover
    },
    {
        carName: 'Porsche',
        model: '2019 - 911 CARRERA S',
        mpg: '19/24',
        hp: '443',
        accMeter: '3.2',
        image: porsche
    }
];

const Section2 = (props) => {

    const [ carIndex, setCarIndex ] = useState(0)

    const yellowBackground = useRef(null)
    const headingText = useRef(null)
    const text = useRef(null)
    const carRef = useRef([])
    const carousel = useRef([])
    const arrow = useRef(null)


    const handleClickPrev = () => {
        let prevIndex = carIndex;
        let index = carIndex;
        let length = carInfo.length;

        if(index < 1) {
            index = length - 1;
        } else {
            index--;
        }

        setCarIndex(index)
        
        if(!props.mobileWidth) {
            finalCarAnimation(prevIndex)
            initialCarAnimation(index)
        }
    }

    const handleClickNext = () => {
        let prevIndex = carIndex;
        let index = carIndex;
        let length = carInfo.length;

        if(index === length - 1) {
            index = 0;
        } else {
            index++;
        }

        setCarIndex(index)
        
        if(!props.mobileWidth) {
            finalCarAnimation(prevIndex)
            initialCarAnimation(index)
        }
    }

    const yellowAnimation = () => {
        gsap.fromTo(yellowBackground.current, {
            width: '0%', 
        }, {
            duration: 1, 
            width: '40%',
            clearProps: "all",
            scrollTrigger: yellowBackground.current,
            onComplete: () => {
                initialCarAnimation(carIndex)
                arrowAnimation()
                headingTextAnimation()
            }
        })
    }
    
    const headingTextAnimation = () => {
        gsap.fromTo(headingText.current, {
            y: '-100',
        }, {
            y: '0',
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
                textAnimation()
            }
        })
    }

    const textAnimation = () => {
        gsap.fromTo(text.current, {
            y: '-100',
        }, {
            y: '0',
            opacity: 1,
            duration: 0.5
        })
    }

    const initialCarAnimation = (index) => {
        gsap.fromTo(carousel.current[index], {
            y: '100',
        }, {
            y: '0',
            duration: 0.5,
            opacity: 1
        })

        gsap.fromTo(carRef.current[index], {
            left: '100%'
        }, {
            duration: 1,
            opacity: 1,
            left: '0%',
        })
    }

    const finalCarAnimation = (index) => {
        gsap.to(carousel.current[index], {
            y: '-100px',
            opacity: 0,
            duration: 0.5,
        })

        gsap.to(carRef.current[index], {
            duration: 0.5,
            opacity: 0,
            left: '-200%'
        })
    }

    const arrowAnimation = () => {
        gsap.to(arrow.current, {
          duration: 0.5,
          opacity: 1,
        });
      }

      useEffect(() => {
          
      if(!props.mobileWidth) {
        yellowAnimation()
      } else {
        gsap.set(yellowBackground.current, {
            width: '100%'
        })
      }
    }, [props.mobileWidth]);
    
    return (
        <SectionTwo>
            <LeftContent ref={yellowBackground}>
                <Arrows ref={arrow}>
                    <img src={arrowPrev} onClick={handleClickPrev} />
                    <img src={arrowNext} onClick={handleClickNext} />
                </Arrows>
                {
                    carInfo.map((carData, index) => {
                        return (
                            <div key={index}>
                                <CarCarousel>
                                    { props.mobileWidth ? (index === carIndex && <CarDesc>
                                            <h4>{carData.carName}</h4>
                                            <p>{carData.model}</p>
                                            <CarConfig>
                                                <div>
                                                    <img src={mpgImage} />
                                                    <p>MPG</p>
                                                </div>
                                                <p>{carData.mpg}</p>
                                            </CarConfig>
                                            <CarConfig>
                                                <div>
                                                    <img src={hpImage} />
                                                    <p>HP</p>
                                                </div>
                                                <p>{carData.hp}</p>
                                            </CarConfig>
                                            <CarConfig>
                                                <div>
                                                    <img src={accImage} />
                                                    <p>0-60</p>
                                                </div>
                                                <p>{carData.accMeter}</p>
                                            </CarConfig>
                                        </CarDesc>) : (<CarDesc ref={ref => { if (ref) carousel.current[index] = ref }} >
                                            <h4>{carData.carName}</h4>
                                            <p>{carData.model}</p>
                                            <CarConfig>
                                                <div>
                                                    <img src={mpgImage} />
                                                    <p>MPG</p>
                                                </div>
                                                <p>{carData.mpg}</p>
                                            </CarConfig>
                                            <CarConfig>
                                                <div>
                                                    <img src={hpImage} />
                                                    <p>HP</p>
                                                </div>
                                                <p>{carData.hp}</p>
                                            </CarConfig>
                                            <CarConfig>
                                                <div>
                                                    <img src={accImage} />
                                                    <p>0-60</p>
                                                </div>
                                                <p>{carData.accMeter}</p>
                                            </CarConfig>
                                        </CarDesc>)
                                    }
                                </CarCarousel>
                                <Car>
                                    {
                                        props.mobileWidth ? (index === carIndex && <img 
                                        className={`porsche-${index}`} 
                                        src={carData.image}
                                        />) :
                                        <img 
                                        className={`porsche-${index}`} 
                                        src={carData.image}
                                        ref={ref => { if (ref) carRef.current[index] = ref }} /> 
                                    }
                                </Car>
                            </div>      
                        )
                    })
                }
            </LeftContent>
            
            <RightContent>
                <Text>
                    <h2 ref={headingText}>Select a vehicle from your phone.</h2>
                    <p ref={text}>Select from a wide range of luxury vehicles 
                    in our inventory. Drive it for a month, trade it 
                    the next for something else you have always wanted to own.</p>
                </Text>
            </RightContent>
        </SectionTwo>
    )
}


export default Section2