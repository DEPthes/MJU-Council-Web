import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  gap: 12px;
  border-bottom: 1px solid var(--M5);
`;

export const HeaderLine = styled.div`
  display: flex;
  background-color: var(--Primary);
  width: 24px;
  height: 4px;
`;

export const Text = styled.p`
  margin: 0;
  font: var(--SectionTitle);
`;

export const DateText = styled.p`
  font: var(--Caption);
  color: var(--M70);
`;
