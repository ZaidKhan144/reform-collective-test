import styled from 'styled-components'

export const SectionTwo = styled.section`
    padding: 300px 96px;
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
        padding-left: 20px;
        padding-right: 20px;
        flex-direction: column-reverse;
        /* width: 100%; */
        padding-top: 120px;
    }
`;

export const LeftContent = styled.div`
    background-color: ${({ theme: { colors } }) => colors.yellow };
    width: 40%;
    height: 600px;
    position: relative;
    padding-left: 100px;
    padding-top: 120px;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start; */

    @media (max-width: 1024px) {
        width: 100%;
        padding-left: 30px;
        padding-top: 50px;
        height: 400px
    }
`;

export const Arrows = styled.div`
    position: absolute;
    z-index: 4;
    padding: 45px;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    z-index: ${({ theme: { zIndex } }) => zIndex.z5 };

    @media (max-width: 1024px) {
        padding: 35px 40px
    }
    
    & img {
        cursor: pointer;
        
        @media (max-width: 1024px) {
            width: 9%;
        }
    }

    & img:first-child {
        margin-right: 21px;
    }
`;

export const CarCarousel = styled.div`
    position: absolute;
`;

export const CarDesc = styled.div`
   display: flex;
   flex-direction: column;
   
   & h4 {
      font-family: Bebas Neue;
      font-size: 64px;
      line-height: 75px;
      margin: 0;

        @media (max-width: 1024px) {
            font-size: 40px;
            line-height: 46.88px;
        }
   }

   & p {
       font-family: Bebas Neue;
       font-size: 17px;
       line-height: 20px;
       color: ${({ theme: { colors } }) => colors.lightGrey };
       font-weight: bold;
       margin-top: 0px;
       margin-bottom: 30px;
   }
`;

export const CarConfig = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    margin-bottom: 10px;
    text-align: left;

    
    & div:first-child {
        display: flex;
        align-items: center;
        margin-right: 20px;
        width: 76px;

        @media (max-width: 1024px) {
            margin-right: 10px;
        }

        & img {
            margin-right: 15px;
            display: block;
        }

        & p{
            color: ${({ theme: { colors } }) => colors.black };
            margin: 0;
            font-size: 16px;
            line-height: 18px;
        }
    }
        & p {
            margin: 0;
            color: ${({ theme: { colors } }) => colors.darkGrey };
            font-size: 31px;
            line-height: 36px;
            text-align: left;
        }
`;

export const Car = styled.div`
    position: absolute;
    width: 700px;
    /* top: 400px; */
    left: 120px; 
    bottom: -70px;

    @media (max-width: 1024px) {
        width: 100%;
        left: 0px;
        bottom: -40px;
    }

    & img {
        display: block;
    }

    & .porsche-1 {
        transform: scaleX(-1);
    }
`;

export const RightContent = styled.div`
    padding-left: 140px;
    padding-top: 40px;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: flex-start; */
    /* justify-content: flex-start; */
    width: 60%;
    height: 600px;

    @media (max-width: 1024px) {
        padding-left: 0;
        padding-top: 0;
        width: 100%;
        height: auto;
        margin-bottom: 25px;
    }
`;

export const Text = styled.div`
    & h2 {
        font-family: Bebas Neue;
        font-size: 95px;
        line-height: 98px;
        letter-spacing: -0.46px;
        margin: 0;
        color: ${({ theme: { colors } }) => colors.greyText };

        @media (max-width: 1024px) {
            font-size: 45px;
            line-height: 48px;
            letter-spacing: -0.22px;
        }
    }

    & p {
        font-family: Eina03;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.47px;
        width: 65%;

        @media (max-width: 1024px) {
            width: 100%;
        }
    }
`;