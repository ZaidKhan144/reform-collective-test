import styled from "styled-components";

export const FooterSection = styled.div`
    padding: 30px 0px 109px 0px;
    margin: 108px 96px 0 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid ${({ theme: { colors } }) => colors.cardBackground };

    @media (max-width: 1024px) {
        padding-bottom: 80px;
        width: calc(100% - 20px - 20px);
        margin: 50px 0 0 30px;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;

    @media (max-width: 1024px) {
        display: none;
    }

    & a {
        font-family: Eina03;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: -0.32px;
        text-align: left;
        text-decoration: none;
        font-weight: bold;
        color: ${({ theme: { colors } }) => colors.linkColor };
    }
`;