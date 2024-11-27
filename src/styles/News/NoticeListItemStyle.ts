import styled from "styled-components";

export const ListItemContainer = styled.div<{ $isStart: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  gap: 10px;
  border-top: ${(props) => (props.$isStart ? "none" : "1px solid var(--M30)")};
  cursor: pointer;
`;

export const Title = styled.h5`
  color: var(--Black);
  font: var(--ListTitle);
`;

export const RightWrap = styled.div`
  display: flex;
  gap: 12px;
  font: var(--Caption);
  color: var(--M50);
  white-space: nowrap;
`;
