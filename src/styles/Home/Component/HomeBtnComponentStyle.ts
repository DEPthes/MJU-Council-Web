import styled from "styled-components";


export const Btn = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    background-color: transparent;
    padding:0;
    border:0;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-40px);
`;

export const P = styled.p`
    display:flex;
    color: var(--M5, #F2F4F7);
    text-align: center;
    margin:0;
    font: var(--ListTitle);
`;

export const Img = styled.img`
    margin: 0 0 0 4px;
`;