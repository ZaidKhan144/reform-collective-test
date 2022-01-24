import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        white: '#FFF',
        black: '#000',
        yellow: '#FBC843',
        grey: '#414A69',
        lightGrey: '#4B5168',
        darkGrey: '#1B1E28',
        cardBackground: '#f4f4f5',
        greyText: '#2b3144'
    },

    zIndex: {
        z0: 0,
        z1: 1,
        z2: 2,
        z5: 5,
        z9: 9,
        z99: 99,
        z998: 998,
        z999: 999
    },

}

// here theme component will render all the properties from Theme provider
const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children} </ThemeProvider>
  );

export default Theme

// How to use
// const Heading = styled.h1`
//   color: ${({ theme: { colors } }) => colors.yellow };
// `;