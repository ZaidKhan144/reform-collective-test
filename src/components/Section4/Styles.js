import styled from 'styled-components'

export const SectionFour = styled.section`
    display: flex;
    align-items: center;
    padding-left: 96px;
    padding-right: 96px;
    justify-content: space-between;
`;

export const LeftContent = styled.div`
    background-color: ${({ theme: { colors } }) => colors.yellow };
    width: 35%;
    height: 700px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    & img:nth-child(2) {
        position: absolute;
        left: 60%;
        width: 60%;
        box-shadow: -8px 14px 31px 8px rgba(0,0,0,0.25);
        border-radius: 30px;
    }
`;

export const RightContent = styled.div`
    width: 50%;
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
    }

    & p {
        font-family: Eina03;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.47px;
        text-align: left;
        width: 60%;
    }
`;