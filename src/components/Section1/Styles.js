import styled from 'styled-components'

export const SectionOne = styled.section`
    background-color: ${({ theme: { colors } }) => colors.yellow };
    width: 100%;
    height: 740px;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
`;

export const LeftContent = styled.div`
    width: 70%;
`;

export const Logo = styled.img`
    width: 225px;
    height: 18px;
`;

export const Text = styled.div`
    position: relative;
    top: 90px;

    & h1 {
        color: ${({ theme: { colors } }) => colors.white };
        font-family: Bebas Neue;
        font-size: 145px;
        line-height: 138px;
        letter-spacing: -4.1px;
        text-align: left;
        font-weight: bold;
        text-transform: uppercase;
        margin: 0;
    }

    & span {
        display: flex;
        align-items: center;

        & p {
            font-family: Eina03;
            font-size: 16px;
            line-height: 54px;
            letter-spacing: -0.47px;
            font-weight: bold;
            color: ${({ theme: { colors } }) => colors.grey };
        }
        & img {
            display: block;
            margin-left: 40px;
        }
    }
`;

export const CarImages = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    height: 250px;
    width: 60%;
    top: 600px;
    left: 0;
`;

export const Car1 = styled.img`
    width: 60%;
    transform: translate(85%);
    position: absolute;
`;

export const Car2 = styled.img`
    width: 60%;
    position: absolute;
    transform: scaleX(-1) translate(24%);
`;

export const Car3 = styled.img`
    z-index: ${({ theme: { zIndex } }) => zIndex.z2 };
    position: absolute;
    width: 80%;
    transform: translate(13%, 12%);
`;

export const RightContent = styled.div`
    z-index: ${({ theme: { zIndex } }) => zIndex.z5 };
    box-shadow: -8px 14px 31px 8px rgba(0,0,0,0.25);
    border-radius: 37px;
`;