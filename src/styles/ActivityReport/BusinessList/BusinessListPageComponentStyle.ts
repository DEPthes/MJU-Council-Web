import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 12px;
`;

export const PageButtonContainer = styled.div<{ $isactive: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${(props) =>
    props.$isactive ? "var(--Primary)" : "var(--M30)"};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageText = styled.p`
  width: 48px;
  display: flex;
  justify-content: center;
  font: var(--ListTitle);
  color: var(--Primary);
`;
