import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  padding: 10px 20px;
  gap: 4px;
  border-top: 1px solid var(--M30);
  background-color: var(--M5);
  align-items: center;
  box-sizing: border-box;
`;

export const Text = styled.p`
  font: var(--Caption);
  color: var(--Primary);
`;

export const UrlContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
