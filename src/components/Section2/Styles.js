import styled from 'styled-components'

export const SectionTwo = styled.div`
    padding: 300px 96px;
    display: flex;
    align-items: center;
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
    
    & img {
        cursor: pointer;
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
   }

   & p {
       font-family: Bebas Neue;
       font-size: 17px;
       line-height: 20px;
       color: ${({ theme: { colors } }) => colors.lightGrey };
       font-weight: bold;
       margin-top: 0px;
       margin-bottom: 60px;
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
`;

export const Text = styled.div`
    & h2 {
        font-family: Bebas Neue;
        font-size: 95px;
        line-height: 98px;
        letter-spacing: -0.46px;
        margin: 0;
        color: ${({ theme: { colors } }) => colors.greyText };
    }

    & p {
        font-family: Eina03;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.47px;
        width: 65%;
    }
`;