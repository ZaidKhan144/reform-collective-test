import styled from 'styled-components'

export const SectionFour = styled.section`
    display: flex;
    align-items: center;
    padding-left: 96px;
    padding-right: 96px;
    justify-content: space-between;

    @media (max-width: 1024px) {
        padding-right: 20px;
        padding-left: 20px;
        flex-direction: column-reverse;
    }
`;

export const LeftContent = styled.div`
    background-color: ${({ theme: { colors } }) => colors.yellow };
    width: 35%;
    height: 700px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        width: 100%;
        left: -20%;
        height: 600px;
    }

    & img:nth-child(2) {
        position: absolute;
        left: 60%;
        width: 60%;
        box-shadow: -8px 14px 31px 8px rgba(0,0,0,0.25);
        border-radius: 30px;

        @media (max-width: 1024px) {
            border-radius: 25px; 
        }
    }
`;

export const RightContent = styled.div`
    width: 50%;

    @media (max-width: 1024px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Text = styled.div`
    & h2 {
        font-family: Bebas Neue;
        font-size: 95px;
        line-height: 98px;
        letter-spacing: -0.45px;
        text-align: left;
        color: ${({ theme: { colors } }) => colors.greyText };
        margin: 0;

        @media (max-width: 1024px) {
            font-size: 45px;
            line-height: 48px;
            letter-spacing: -0.22px;
            width: 100%;
        }
    }

    & p {
        font-family: Eina03;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.47px;
        text-align: left;
        width: 60%;

        @media (max-width: 1024px) {
            width: 100%;
        }
    }
`;