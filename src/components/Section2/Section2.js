import React, { useState } from 'react'
import { SectionTwo, LeftContent, Arrows, CarCarousel, CarDesc, CarConfig, Car, RightContent, Text } from './Styles'

import arrowPrev from '../../assets/images/arrow-left.svg'
import arrowNext from '../../assets/images/arrow-right.svg'
import mpgImage from '../../assets/images/mpg.svg'
import hpImage from '../../assets/images/hp.svg'
import accImage from '../../assets/images/acc-meter.svg'
import landRover from '../../assets/images/car4.png'
import porsche from '../../assets/images/car3.png'

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

const Section2 = () => {
    const [ carIndex, setCarIndex ] = useState(0)

    const handleClickPrev = () => {
        let index = carIndex;
        let length = carInfo.length;

        if(index < 1) {
            index = length - 1;
        } else {
            index--;
        }

        setCarIndex(index)
    }

    const handleClickNext = () => {
        let index = carIndex;
        let length = carInfo.length;

        if(index === length - 1) {
            index = 0;
        } else {
            index++;
        }

        setCarIndex(index)
    }
    

    return (
        <SectionTwo>
            <LeftContent>
                <Arrows>
                    <img src={arrowPrev} onClick={handleClickPrev} />
                    <img src={arrowNext} onClick={handleClickNext} />
                </Arrows>
                {
                    carInfo.map((carData, index) => {
                        return (
                            <div key={index}>
                                <CarCarousel>
                                    { index === carIndex && 
                                        <CarDesc>
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
                
                                        </CarDesc> 
                                    }
                                </CarCarousel>
                                <Car>
                                    {
                                        index === carIndex && <img className={`porsche-${index}`} src={carData.image} />
                                    }
                                </Car>
                            </div>      
                        )
                    })
                }
            </LeftContent>
            
            <RightContent>
                <Text>
                    <h2>Select a vehicle from your phone.</h2>
                    <p>Select from a wide range of luxury vehicles 
                    in our inventory. Drive it for a month, trade it 
                    the next for something else you have always wanted to own.</p>
                </Text>
            </RightContent>
        </SectionTwo>
    )
}


export default Section2