import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import { useState, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import Footer from './components/Footer/Footer';


const App = () => {
  const [ mobileWidth, setMobileWidth ] = useState(window.innerWidth < 1025)

  const updateDimensions = () => {
    let mobileWidth = window.innerWidth < 1025
    setMobileWidth(mobileWidth)
    if (mobileWidth) {
      ScrollTrigger.getAll().forEach(ST => {ST.kill({revert: true})})
    }
  }

  useEffect(() => {

    updateDimensions();

    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  return (
    <Theme>
      <GlobalStyle />
      <Section1 mobileWidth={mobileWidth} />
      <Section2 mobileWidth={mobileWidth} />
      <Section3 mobileWidth={mobileWidth} />
      <Section4 mobileWidth={mobileWidth} />
      <Section5 mobileWidth={mobileWidth} />
      <Section6 mobileWidth={mobileWidth} />
      <Footer mobileWidth={mobileWidth} />
    </Theme>
  );
}

export default App;
