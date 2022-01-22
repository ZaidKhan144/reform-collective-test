import React from 'react'
import { SectionOne, LeftContent, Logo , Text, CarImages, Car1, Car2, Car3, RightContent } from './Styles'

import LogoSrc from '../../assets/images/logo-white.svg'
import arrow from '../../assets/images/arrow-right.svg'
import car1 from '../../assets/images/car1.png'
import car2 from '../../assets/images/car2.png'
import car3 from '../../assets/images/car3.png'
import phoneScreen from '../../assets/images/phone-sec1.png'


const Section1 = () => {
    return (
        <SectionOne>
            <LeftContent>
                <Logo src={LogoSrc} />
                <Text>
                    <h1>Drive a new car every month.</h1>
                    <span><p>Available On the App</p><img src={arrow}/></span>
                </Text>
                <CarImages>
                    <Car2 src={car2} />
                    <Car3 src={car3} />
                    <Car1 src={car1} />
                </CarImages>
            </LeftContent>
            <RightContent>
                <img src={phoneScreen} />
            </RightContent>
        </SectionOne>
    )
}

export default Section1