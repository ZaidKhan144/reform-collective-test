import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionFive, Card } from './Styles';

import icon1 from '../../assets/images/icon-1.png'
import icon2 from '../../assets/images/icon-2.png'
import icon3 from '../../assets/images/icon-3.png'

gsap.registerPlugin(ScrollTrigger);

const cardInfo = [
    {
        image: icon1,
        title: 'SIMPLE MONTHLY PRICING',
        text: 'Pick your plan, pay the monthly price.  Thats it.  No hidden fees!'
    },
    {
        image: icon2,
        title: 'VEHICLE INSURANCE INCLUDED',
        text: 'That’s right, you’re covered.  All Eleanor plans include insurance coverage.'
    },
    {
        image: icon3,
        title: 'MAINTENANCE IS COVERED',
        text: 'Leave it us.  Don’t worry about maintaining your vehicle.  Eleanor covers that as well.'
    }
]

const Section5 = () => {

    const cardRef = useRef([])

    const cardsAnimation = (index) => {
        gsap.fromTo(cardRef.current[index], {
            y: '-100',
            opacity: 0,
        }, {
            y: '0',
            duration: 1,
            opacity: 1,
            onComplete: () => {
                index = index + 1;
        
                if (index < cardInfo.length) {
                    cardsAnimation(index);
                }
              }
        })
    }

    useEffect(() => {
    gsap.fromTo(cardRef.current[0], {
        y: '-100',
        opacity: 0,
    }, {
        y: '0',
        duration: 1,
        opacity: 1,
        scrollTrigger: cardRef.current[0],
        onComplete: () => {
            cardsAnimation(1)
        }
    })
    }, []);
    

  return (
    <SectionFive>
        {
            cardInfo.map((cardData, index) => {
                return (
                    <Card ref={ref => { if (ref) cardRef.current[index] = ref }} key={index}>
                        <img src={cardData.image} />
                        <h6>{cardData.title}</h6>
                        <p>{cardData.text}</p>
                    </Card>
                )
            })
        }
    </SectionFive>
  )
}

export default Section5