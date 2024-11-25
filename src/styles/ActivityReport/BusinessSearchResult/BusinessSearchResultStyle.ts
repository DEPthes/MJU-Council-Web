import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

export const Text = styled.p`
  font: var(--BodyText);
  text-align: center;
  padding: 40px 20px;
`;

export const BusinessContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--M70);
  border-top: 1px solid var(--M70);
`;
