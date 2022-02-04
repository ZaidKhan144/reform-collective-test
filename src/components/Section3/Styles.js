import styled from 'styled-components'

export const SectionThree = styled.section`
    display: flex;
    align-items: center;
    padding-left: 96px;
    padding-right: 96px;
    justify-content: space-between;
    margin-bottom: 400px;

    @media (max-width: 1025px) {
        padding-right: 20px;
        padding-left: 20px;
        flex-direction: column;
        margin-bottom: 200px;
    }
`;

export const LeftContent = styled.div`
    max-width: 30%;
    height: 230px;

    @media (max-width: 1025px) {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
`;

export const Text = styled.div`
    
    & h2 {
        font-family: Bebas Neue;
        /* font-size: 95px;
        line-height: 98px; */
        font-size: 5vw;
        line-height: 5vw;
        letter-spacing: -0.45px;
        text-align: left;
        margin: 0;
        color: ${({ theme: { colors } }) => colors.greyText };

        @media (max-width: 1025px) {
            font-size: 45px;
            height: auto;
            line-height: 48px;
            letter-spacing: -0.22px;
        }
    }

    & p {
        font-family: Eina03;
        /* font-size: 16px; */
        font-size: 1vw;
        line-height: 26px;
        letter-spacing: -0.47px;
        text-align: left;
        margin: 0;
        margin-top: 30px;
        width: 338px;
        opacity: 0;

        @media (max-width: 1025px) {
            width: 100%;
            margin-top: 15px;
            font-size: 3.5vw;
            height: auto;
        }
    }
`;

export const RightContent = styled.div`
    position: relative;
    /* height: 400px; */
    height: 32vw;
    width: 60%;

    @media (max-width: 1025px) {
        width: calc(100% + 20px + 20px);
        margin-top: 100px;
        /* height: 500px; */
        height: 120vw;
    }

    & img:nth-child(2) {
        position: absolute;
        /* width: 500px; */
        width: 40vw;
        left: -70%;
        opacity: 0;
        bottom: -10%;

        @media (max-width: 1025px) {
            display: none;
        }
    }

    & img:nth-child(3) {
        position: absolute;
        left: 50%;
        top: -50%;
        /* width: 300px; */
        width: 18vw;
        box-shadow: -8px 14px 31px 8px rgba(0,0,0,0.25);
        opacity: 0;

        @media (max-width: 1025px) {
            width: 45%;
            top: 35%;
            left: 50%;
            height: auto;
            transform: translate(-50%, -50%);
        }
    }
`;
