import styled from "styled-components";

export const GuideWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 60px;

  > h2 {
    font: var(--ContentsHeader);
    color: var(--Primary);
    margin-bottom: 12px;
    text-align: center;
  }

  > hr {
    border-bottom: 1px solid var(--M70);
    width: 100%;
    margin: 0px;
  }
`;

export const GuideItemWrap = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 14px;
`;
