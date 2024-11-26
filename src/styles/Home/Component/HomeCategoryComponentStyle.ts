import styled from "styled-components";

export const Div = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    margin: 40px 0;
`;

export const Img = styled.img`
    display: flex;
    padding: 12px;
    align-items: center;
    align-self: stretch;
    border-radius: 100px;
    border: 1px solid var(--M30);
    margin: 0 6px;
    background-color:white;
    cursor: pointer;
`;

export const Indiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export const CName = styled.p`
    display:flex;
    margin: 8px 0 0 0;
    justify-content: center;

    color: var(--Primary);
    text-align: center;
    font: var(--NavigationTitle)
`;
