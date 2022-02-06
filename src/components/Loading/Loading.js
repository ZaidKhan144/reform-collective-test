import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Loader } from './Styles';

import circle from '../../assets/images/circle.svg'
import icon from '../../assets/images/icon.svg'

const Loading = (props) => {

    const circleRef = useRef(null)

    useEffect(() => {
      gsap.to(circleRef.current, {
          duration: 1.5,
          rotation: 160,
          transformOrigin: "51.5% 50%",
          onComplete: () => {
              props.setLoading(false)
          }
      })
    }, []);
    

  return (
    <Loader>
        <img ref={circleRef} src={circle} alt="circle" />
        <img src={icon} alt="icon" />
    </Loader>
  );
}

export default Loading