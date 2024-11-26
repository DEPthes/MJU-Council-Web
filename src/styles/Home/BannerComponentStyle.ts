import styled from "styled-components";

export const Div = styled.div`
    background-color: pink;
    display: flex;
    width: 390px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0;
`;

export const Img = styled.img`
    width: 390px;
    height: 390px;
    flex-shrink: 0;
`;

export const Slide = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
`;
export const Bar = styled.img`
    display:flex;
    flex: 1 0 0;
    height:8px;
    transform: translateX(-2px);
    margin:0;
`;

export const CurrentBar = styled.img`
    display:flex;
    flex: 1 0 0;
    height:8px;
    margin:0;
`;

export const Btn = styled.button`
    display:flex;
    flex-direction: row;
    justify-content:center;
    background-color: transparent;
    padding:0;
    border:0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 150px);
`;

export const P = styled.p`
    display:flex;
    color: var(--M5);
    text-align: center;
    margin:0;
    font:var(--ListTitle)
`;

export const ArrowImg = styled.img`
    margin: 0 0 0 4px;
`;