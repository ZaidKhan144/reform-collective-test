import styled from 'styled-components'

export const SectionTwo = styled.section`
    padding: 300px 96px;
    display: flex;
    align-items: center;

    @media (max-width: 1025px) {
        padding-left: 20px;
        padding-right: 20px;
        flex-direction: column-reverse;
        width: 100%;
        padding-top: 120px;
        padding-bottom: 150px;
    }
`;

export const LeftContent = styled.div`
    background-color: ${({ theme: { colors } }) => colors.yellow };
    width: 40%;
    height: 40vw;
    position: relative;
    padding-left: 6vw;
    padding-top: 7vw;

    @media (max-width: 1025px) {
        width: 100%;
        padding-left: 30px;
        padding-top: 50px;
        height: 400px
    }
`;

export const Arrows = styled.div`
    position: absolute;
    padding: 45px;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    z-index: ${({ theme: { zIndex } }) => zIndex.z5 };
    opacity: 0;

    @media (max-width: 1025px) {
        padding: 35px 40px;
        opacity: 1;
    }
    
    & img {
        cursor: pointer;
        
        @media (max-width: 1025px) {
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
   opacity: 0;

   @media (max-width: 1025px) {
       opacity: 1;
   }
   
   & h4 {
      font-family: Bebas Neue;
      font-size: 4vw;
      line-height: 75px;
      margin: 0;

        @media (max-width: 1025px) {
            font-size: 40px;
            line-height: 46.88px;
        }
   }

   & p {
       font-family: Bebas Neue;
       font-size: 1vw;
       line-height: 20px;
       color: ${({ theme: { colors } }) => colors.lightGrey };
       font-weight: bold;
       margin-top: 0px;
       margin-bottom: 30px;

       @media (max-width: 1025px) {
            font-size: 4.2vw;
            line-height: 5vw;
       }
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
        width: 6vw;

        @media (max-width: 1025px) {
            margin-right: 10px;
            width: 18vw;
        }

        & img {
            margin-right: 1vw;
            display: block;
            width: 1.2vw;

            @media (max-width: 1025px) {
                width: 6vw;
                margin-right: 2vw;
            }
        }

        & p{
            color: ${({ theme: { colors } }) => colors.black };
            margin: 0;
            font-size: 1.2vw;
            line-height: 18px;

            @media (max-width: 1025px) {
                font-size: 4vw;
            }
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
        width: 55vw;
        bottom: -85px;

        & img {
            position: absolute;
            display: block;
            width: 55vw;
            opacity: 0;
            bottom: 0px;
        }

    @media (max-width: 1025px) {
        width: 100%;
        left: 0px;
        bottom: -40px;

        & img {
            width: 100%;
            opacity: 1;
        }
    }

    & .porsche-1 {
        transform: scaleX(-1);
    }
`;

export const RightContent = styled.div`
    padding-left: 8vw;
    padding-top: 3vw;
    max-width: 55%;
    height: 40vw;

    @media (max-width: 1025px) {
        padding-left: 0;
        padding-top: 0;
        max-width: 100%;
        height: auto;
        margin-bottom: 25px;
    }
`;

export const Text = styled.div`
    & h2 {
        font-family: Bebas Neue;
        font-size: 5vw;
        line-height: 98px;
        letter-spacing: -0.46px;
        margin: 0;
        color: ${({ theme: { colors } }) => colors.greyText };
        opacity: 0;

        @media (max-width: 1025px) {
            font-size: 45px;
            line-height: 48px;
            letter-spacing: -0.22px;
            opacity: 1;
        }
    }

    & p {
        font-family: Eina03;
        font-size: 1vw;
        line-height: 26px;
        letter-spacing: -0.47px;
        max-width: 70%;
        opacity: 0;

        @media (max-width: 1025px) {
            font-size: 3.5vw;
            line-height: 5vw;
            max-width: 100%;
            opacity: 1;
        }
    }
`;