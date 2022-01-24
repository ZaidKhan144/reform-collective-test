import styled from "styled-components";

export const SectionSix = styled.div`
    padding-left: 96px;
    padding-right: 96px;
    display: flex;
`;

export const LeftContent = styled.div`
    background-color: ${({ theme: { colors } }) => colors.yellow };
    height: 700px;
    width: 50%;
    position: relative;
    margin-right: 98px;

    & img:first-child {
        position: absolute;
        bottom: 0;
        left: 20%;
        width: 50%;
    }

    & img:nth-child(2) {
        position: absolute;
        bottom: -10%;
        left: 50%;
        width: 160%;
    }
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
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
    }

    & p:nth-child(2) {
        font-family: Eina03;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.47px;
        text-align: left;
        width: 70%;
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
        margin-top: 40px;
    }

    & span:nth-child(5) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
        margin-top: 30px;

        & p{
            font-family: Eina03;
            font-size: 16px;
            line-height: 54px;
            letter-spacing: -0.47px;
            text-align: left;
            font-weight: bold;
            margin: 0;
        }
    }
`;