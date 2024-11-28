import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const IntroBtn = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 49%;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--M70);
  text-align: center;
  font: var(--ContentsHeader);
  margin: 0 1px;
  background: ${({ isActive }) => (isActive ? "var(--Primary)" : "var(--M30)")};
  border: transparent;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "white" : "var(--M70)")};
`;