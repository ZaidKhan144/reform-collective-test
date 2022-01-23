import React from 'react';
import { SectionFour, LeftContent, RightContent, Text } from './Styles';

import car from '../../assets/images/car5.png'
import phoneScreen from '../../assets/images/phone-sec4.png'

const Section4 = () => {
  return (
    <SectionFour>
        <LeftContent>
            <img src={car} />
            <img src={phoneScreen} />
        </LeftContent>
        <RightContent>
            <Text>
                <h2>Trade in your car every month.</h2>
                <p>Use Eleanor Trade-In Credits to trade 
                in your vehicle for something else in our luxurious inventory. 
                Nothing says “June” like a new car!</p>
            </Text>
        </RightContent>
    </SectionFour>
  )
}

export default Section4;