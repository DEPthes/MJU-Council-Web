import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 12px;

  > img {
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 16px;
  border-radius: 4px;
  background-color: var(--M5);
  cursor: pointer;

  > p {
    font: var(--Heading);
    color: var(--M70);
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  > h1 {
    font: var(--SectionTitle);
    color: var(--Black);
  }
`;
