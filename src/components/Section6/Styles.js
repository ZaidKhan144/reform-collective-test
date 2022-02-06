import styled from "styled-components";

export const SectionSix = styled.section`
    padding-left: 96px;
    padding-right: 96px;
    display: flex;

    @media (max-width: 1025px) {
        padding-left: 20px;
        padding-right: 20px;
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const LeftContent = styled.div`
    background-color: ${({ theme: { colors } }) => colors.yellow };
    /* height: 700px; */
    height: 35vw;
    width: 50%;
    position: relative;
    margin-right: 98px;

    @media (max-width: 1025px) {
        width: calc(100% + 25px + 25px);
        margin-right: 0px;
        /* height: 500px; */
        height: 120vw;
    }

    & img:first-child {
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        width: 50%;

        @media (max-width: 1025px) {
            left: 15%;
            width: 70%;
            opacity: 1;
        }
    }

    & img:nth-child(2) {
        position: absolute;
        bottom: -10%;
        left: 0;
        width: 100%;
        opacity: 0;

        @media (max-width: 1025px) {
            display: none;
        }
    }
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    opacity: 0;

    @media (max-width: 1025px) {
        width: 100%;
        opacity: 1;   
    }
`;

export const Text = styled.div`
    & h2 {
        font-family: Bebas Neue;
        font-size: 93px;
        line-height: 88px;
        letter-spacing: -0.44px;
        text-align: left;
        color: ${({ theme: { colors } }) => colors.greyText };
        margin: 0;
        max-width: 90%;

        @media (max-width: 1025px) {
            font-size: 45px;
            line-height: 48px;
            letter-spacing: -0.22px;
            max-width: 100%;
        }
    }

    & p:nth-child(2) {
        font-family: Eina03;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.47px;
        text-align: left;
        width: 70%;

        @media (max-width: 1025px) {
            width: 100%;
        }
    }

    & p:nth-child(3) {
        font-family: Eina03;
        font-size: 12px;
        line-height: 26px;
        letter-spacing: -0.35px;
        text-align: left;
        font-weight: bold;
    }
    & hr {
        border: none;
        width: 100%;
        height: 2px;
        background-color: ${({ theme: { colors } }) => colors.cardBackground };
        margin-top: 30px;
        margin-bottom: 0px;

        @media (max-width: 1025px) {
            margin-top: 20px;
        }
    }

    & span:nth-child(5) {
        display: flex;
        align-items: center;
        margin-top: 5px;

        @media (max-width: 1025px) {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        & p{
            font-family: Eina03;
            font-size: 16px;
            line-height: 54px;
            letter-spacing: -0.47px;
            text-align: left;
            font-weight: bold;
            margin: 0;
            margin-right: 4vw;
            color: ${({ theme: { colors } }) => colors.grey };
        }
    }
`;