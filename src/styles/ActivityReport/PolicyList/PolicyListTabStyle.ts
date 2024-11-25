import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-x: auto; /* 가로 스크롤 유지 */
  width: 100%;
  scrollbar-width: none;
`;

export const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 84px;
  height: 56px;
  cursor: pointer;
`;

export const TabItem = styled.div<{ $selected: boolean; $isEnd: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  font: var(--ContentsHeader);
  color: ${(props) => (props.$selected ? "var(--Primary)" : "var(--M50)")};
  border-bottom: ${(props) =>
    props.$selected ? "4px solid var(--Primary)" : "1px solid var(--M5)"};
`;

export const Line = styled.div`
  height: 16px;
  border: 1px solid var(--M5);
`;
