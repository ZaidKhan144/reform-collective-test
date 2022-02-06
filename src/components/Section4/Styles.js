import styled from 'styled-components'

export const SectionFour = styled.section`
    display: flex;
    align-items: center;
    padding-left: 96px;
    padding-right: 96px;
    justify-content: space-between;

    @media (max-width: 1025px) {
        padding-right: 20px;
        padding-left: 20px;
        flex-direction: column-reverse;
        width: 100%;
    }
`;

export const LeftContent = styled.div`
    background-color: ${({ theme: { colors } }) => colors.yellow };
    width: 35%;
    height: 60vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1025px) {
        width: 80%;
        left: -20%;
        height: 110vw;
    }

    & img:nth-child(2) {
        position: absolute;
        left: 55%;
        top: -20%;
        opacity: 0;
        width: 70%;
        box-shadow: -8px 14px 31px 8px rgba(0,0,0,0.25);
        border-radius: 2.2vw;

        @media (max-width: 1025px) {
            border-radius: 4vw;
            height: 80%;
            width: auto;
            left: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
        }
    }
`;

export const RightContent = styled.div`
    max-width: 45%;

    @media (max-width: 1025px) {
        max-width: 100%;
        margin-bottom: 100px;
    }
`;

export const Text = styled.div`
    & h2 {
        font-family: Bebas Neue;
        font-size: 5vw;
        line-height: 5vw;
        letter-spacing: -0.45px;
        text-align: left;
        color: ${({ theme: { colors } }) => colors.greyText };
        margin: 0;
        max-width: 90%;
        opacity: 0;

        @media (max-width: 1025px) {
            font-size: 45px;
            line-height: 48px;
            letter-spacing: -0.22px;
            max-width: 100%;
            opacity: 1;
        }
    }

    & p {
        font-family: Eina03;
        font-size: 1vw;
        line-height: 26px;
        letter-spacing: -0.47px;
        text-align: left;
        width: 60%;
        opacity: 0;

        @media (max-width: 1025px) {
            width: 100%;
            font-size: 3.5vw;
            opacity: 1;
        }
    }
`;