import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  width: 100%;
  border-bottom: 1px solid var(--M5);
`;
export const titleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font: var(--ContentsHeader);
`;

export const barBackground = styled.div`
  height: 20px;
  background-color: var(--M5);
  border-radius: 4px;
  overflow: hidden;
`;

export const bar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: var(--Primary);
  border-radius: 4px;
`;

export const dotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const fulfillmentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const dot = styled.div<{ $selected: boolean }>`
  width: 4px;
  height: 4px;
  background-color: ${(props) =>
    props.$selected ? "var(--Primary)" : "var(--M30)"};
  border-radius: 50%;
`;

export const fulfillmentText = styled.div<{ $selected: boolean }>`
  font: ${(props) =>
    props.$selected ? "var(--NavigationTitle)" : "var(--Caption)"};
  color: ${(props) => (props.$selected ? "var(--Primary)" : "var(--M30)")};
`;

export const Content = styled.div`
  display: flex;
  padding: 20px 16px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background: var(--M5);
  font: var(--SubText);
`;
