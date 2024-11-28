import styled from "styled-components";

export const CDiv = styled.div`
    display: flex;
    padding: 40px 20px;
    border-bottom: 1px solid var(--M5);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
    width: 100%;
    flex-direction: column;
    gap: 24px;
    align-self: stretch;
    border-radius: 4px;
    background: var(--M5);
`;

export const PDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BigP = styled.p`
    display: flex;
    color: var(--Black);
    font: var(--ContentsHeader);
    margin-bottom: 12px;
`;

export const SmallP = styled.p`
    display: flex;
    color:var(--Primary);
    font: var(SubText);
`;