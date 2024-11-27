import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 20px;

  > img {
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 4px;
  }

  > p {
    color: var(--Black);
    font: var(--SubText);
    margin-top: 20px;
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

  > h1 {
    font: var(--SectionTitle);
    color: var(--Black);
  }

  > p {
    font: var(--Heading);
    color: var(--M70);
  }
`;
