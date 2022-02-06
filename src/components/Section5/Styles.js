import styled from "styled-components";

export const SectionFive = styled.section`
    padding: 210px 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1025px) {
        padding: 100px 0px;
        flex-direction: column;
        width: 100%;
    }
`;

export const Card = styled.div`
    width: 25vw;
    height: 25vw;
    background-color: ${({ theme: { colors } }) => colors.cardBackground };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.5vw;
    opacity: 0;

    @media (max-width: 1025px) {
        width: 100%;
        margin-bottom: 20px;
        height: 80vw;
        padding-bottom: 12vw;
        padding-top: 12vw;
        opacity: 1;
    }

    & img {
        height: 50%;
    }

    & h6 {
        font-family: Bebas Neue;
        font-size: 30px;
        line-height: 88px;
        letter-spacing: -0.16px;
        text-align: left;
        margin: 0;
        color: ${({ theme: { colors } }) => colors.greyText };

        @media (max-width: 1025px) {
            font-size: 7vw;
            line-height: 70px;
        }
    }

    & p {
        font-family: Eina03;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.41px;
        text-align: left;
        margin: 0;
        width: 90%;

        @media (max-width: 1025px) {
            font-size: 4vw;
            line-height: 5.5vw;
        }
    }
`;