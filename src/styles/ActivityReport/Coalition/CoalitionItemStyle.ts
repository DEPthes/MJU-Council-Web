import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 168px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  flex-direction: column;
`;

export const ImageConatiner = styled.img`
  display: flex;
  width: 100%;
  height: 168px;
  border-radius: 4px;
  overflow: hidden;
  object-fit: cover;
`;

export const Title = styled.p`
  margin-top: 16px;
  font: var(--PageTitle);
`;

export const Date = styled.p`
  margin-top: 8px;
  font: var(--Caption);
  color: var(--M70);
`;
