import React from 'react';
import { SectionFive, Card } from './Styles';

import icon1 from '../../assets/images/icon-1.png'
import icon2 from '../../assets/images/icon-2.png'
import icon3 from '../../assets/images/icon-3.png'

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
  return (
    <SectionFive>
        {
            cardInfo.map((cardData, index) => {
                return (
                    <Card key={index}>
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