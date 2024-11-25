import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
`;

export const ImageContainer = styled.img`
  display: flex;
  width: max-content;
  height: max-content;
  object-fit: cover;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font: var(--bodyText);
`;
