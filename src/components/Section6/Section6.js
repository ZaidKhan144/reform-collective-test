import React from 'react';
import { SectionSix, LeftContent, RightContent, Text } from './Styles';

import man from '../../assets/images/man.png'
import car from '../../assets/images/car1.png'
import arrow from '../../assets/images/arrow-right.svg'

const Section6 = () => {
  return (
    <SectionSix>
        <LeftContent>
            <img src={man} />
            <img src={car} />
        </LeftContent>
        <RightContent>
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