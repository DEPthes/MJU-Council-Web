import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--M5);
`;

export const Text = styled.p`
  overflow-wrap: break-word;
  white-space: normal;
  padding: 40px 20px;
  font: var(--BodyText);
`;

export const FileContainer = styled.div`
  background-color: var(--M5);
  height: 36px;
  margin: 40px 20px;
  padding: 0 10px;
  align-items: center;
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const FileText = styled.p`
  font: var(--Caption);
  color: var(--Primary);
`;
