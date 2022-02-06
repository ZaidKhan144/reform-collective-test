import styled from 'styled-components'

export const Loader = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 9;
    left: 0;
    top: 0;

    & img:nth-child(2) {
        position: absolute;
        top: 50%;
        transform: translate(4%, -50%);
    }
`;