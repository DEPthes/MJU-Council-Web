import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemContainer = styled.div`
  display: grid;
  padding: 40px 20px;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(auto, 1fr);
  row-gap: 14px;

  /* 각 행의 첫 번째 아이템은 왼쪽, 두 번째 아이템은 오른쪽으로 배치 */
  & > div:nth-child(odd) {
    justify-self: start;
  }

  & > div:nth-child(even) {
    justify-self: end;
  }
`;
export const EmptyText = styled.p`
  font: var(--BodyText);
  color: var(--Black);
  text-align: center;
  margin-top: 100px;
  margin-bottom: 160px;
`;
