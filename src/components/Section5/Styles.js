import styled from "styled-components";

export const SectionFive = styled.div`
    padding: 210px 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Card = styled.div`
    width: 400px;
    height: 400px;
    background-color: ${({ theme: { colors } }) => colors.cardBackground };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;

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
    }

    & p {
        font-family: Eina03;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -0.41px;
        text-align: left;
        margin: 0;
        width: 90%;
    }
`;