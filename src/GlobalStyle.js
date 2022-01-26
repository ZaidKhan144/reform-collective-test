import { createGlobalStyle } from 'styled-components'

import BebasNeueLight from './assets/fonts/BebasNeue-Light.woff'
import BebasNeueRegular from './assets/fonts/BebasNeue-Regular.woff'
import BebasNeueBold from './assets/fonts/BebasNeue-Bold.woff'
import Eina03Light from './assets/fonts/Eina03-Light.woff'
import Eina03Regular from './assets/fonts/Eina03-Regular.woff'
import Eina03Bold from './assets/fonts/Eina03-Bold.woff'


const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
	    padding: 0;
        background-color: white;

        @media (max-width: 1024px) {
            overflow: hidden;
        }
    }

    html {
        box-sizing: border-box;
    }

    *,  
    *:before, 
    *:after {
        box-sizing: inherit;
    }

    a {
        text-decoration: none;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
    }

    img,
    svg,
    figure,
    picture,
    object,
    embed,
    iframe,
    video {
        max-width: 100%;
        height: auto;
    }

    figure {
        margin: 0;
    }

    img {
        display: block;
    }

    iframe {
        border: none;
    }

    h1,
    h2,
    h3 {
        margin: {
            top: 0;
            bottom: 0;
        }
    }

    p {
        margin: {
            top: 0;
            bottom: 0;
        }
    }

    section {
        padding: 0 96px 0 96px;
        width: 100%;

        @media (max-width: 1024px) {
            padding: 0 25px 0 25px;
        }
    }

    @font-face {
        font-family: 'Bebas Neue';
        src: url(${BebasNeueLight}) format('woff');
        font-weight: lighter;
    }

    @font-face {
        font-family: 'Bebas Neue';
        src: url(${BebasNeueRegular}) format('woff');
        font-weight: normal;
    }

    @font-face {
        font-family: 'Bebas Neue';
        src: url(${BebasNeueBold}) format('woff');
        font-weight: bold;
    }

    @font-face {
        font-family: 'Eina03';
        src: url(${Eina03Light}) format('woff');
        font-weight: lighter;
    }

    @font-face {
        font-family: 'Eina03';
        src: url(${Eina03Regular}) format('woff');
        font-weight: normal;
    }

    @font-face {
        font-family: 'Eina03';
        src: url(${Eina03Bold}) format('woff');
        font-weight: bold;
    }
`

export default GlobalStyle