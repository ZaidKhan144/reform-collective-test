import React from 'react';
import { LeftContent, SectionThree, Text, RightContent } from './Styles';

import map from '../../assets/images/map.png'
import car from '../../assets/images/car3.png'
import delivery from '../../assets/images/delivery.png'

const Section3 = () => {

  return (
    <SectionThree>
        <LeftContent>
            <Text>
                <h2>Delivered to your door.</h2>
                <p>Eleanor works with your schedule 
                to have a white-glove delivery service deliver 
                your new vehicle right to your door.</p>
            </Text>
        </LeftContent>
        <RightContent>
            <img src={map} />
            <img src={car} />
            <img src={delivery} />
        </RightContent>
    </SectionThree>
  )
}

export default Section3