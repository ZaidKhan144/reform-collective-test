import styled from 'styled-components'

export const SectionThree = styled.section`
    display: flex;
    align-items: center;
    padding-left: 96px;
    padding-right: 96px;
    justify-content: space-between;
    margin-bottom: 400px;

    @media (max-width: 1024px) {
        padding-right: 20px;
        padding-left: 20px;
        flex-direction: column;
    }
`;

export const LeftContent = styled.div`
    width: 35%;
    height: 230px;

    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
    }
`;

export const Text = styled.div`
    
    & h2 {
        font-family: Bebas Neue;
        font-size: 95px;
        line-height: 98px;
        letter-spacing: -0.45px;
        text-align: left;
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
        text-align: left;
        margin: 0;
        margin-top: 30px;
        width: 338px;

        @media (max-width: 1024px) {
            width: 100%;
            margin-top: 15px;
        }
    }
`;

export const RightContent = styled.div`
    position: relative;
    height: 400px;
    width: 60%;

    @media (max-width: 1024px) {
        width: calc(100% + 30px + 30px);
        margin-top: 100px;
        height: 500px;
    }

    & img:nth-child(2) {
        position: absolute;
        width: 500px;
        left: -30%;
        bottom: -25%;

        @media (max-width: 1024px) {
            display: none;
        }
    }

    & img:nth-child(3) {
        position: absolute;
        left: 40%;
        top: -25%;
        width: 300px;
        box-shadow: -8px 14px 31px 8px rgba(0,0,0,0.25);

        @media (max-width: 1024px) {
            width: 50%;
            top: -15%;
            left: 25%;
        }
    }
`;
