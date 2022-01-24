import styled from "styled-components";

export const FooterSection = styled.div`
    padding: 30px 0px 109px 0px;
    margin: 108px 96px 0 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid ${({ theme: { colors } }) => colors.cardBackground };
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;

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