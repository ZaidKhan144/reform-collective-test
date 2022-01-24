import React from 'react';
import { FooterSection, Links } from './Styles'

import logo from '../../assets/images/logo-black.svg'

const Footer = () => {
  return (
    <FooterSection>
        <img src={logo} />
        <Links>
            <a href="#">About us</a>
            <a href="#">Terms of Use</a>
            <a href="#">FAQ</a>
        </Links>
    </FooterSection>
  )
}

export default Footer;