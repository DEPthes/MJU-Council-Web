import styled from "styled-components";

export const BannerDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const P = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--White);
  text-align: center;
  font: var(--SectionTitle);
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
`;


export const ITDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 20px;
    align-items: center;
    gap: 4px;
    background: var(--M5);
`;

export const DivImg = styled.img`
    margin-right: 4px;
`;

export const Text = styled.p`
    display=flex;
    color: var(--Primary);
    font: var(--Caption);
`;