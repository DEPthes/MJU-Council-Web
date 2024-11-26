import styled from "styled-components";

export const Div = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin:0 20px 40px 20px;
`;

export const Top = styled.div`
    display:flex;
    flex-direction: row;
`;

export const P = styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
    color: var(--Primary);
    font: var(--ContentsHeader);
    margin: 0 auto 0 0;
`;

export const Img = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width:24px;
    height:24px;
    background-color:transparent;
`;

export const Bar = styled.img`
    display:flex;
    margin:14px 0 12px 0;
    width: 100%;
    height: 1px;
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
`;

export const ContentAll = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 12px 16px 12px;
    background: var(--M5);
`;

export const Content = styled.div`
    
`;

export const TitleData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContentTitle = styled.p`
    display:flex;
    color: var(--Black);
    font: var(--ListTitle);
    margin:0;
    cursor:pointer;
`;

export const ContentDate = styled.p`
    display:flex;
    color: var(--M50, #8094B3);
    font: var(--Caption);
    margin:0;
    margin-left: auto;
`;

export const ContentLine = styled.img`
    display: flex;
    margin: 12px 0;
    width: 100%;
    height: 1px;
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
`;