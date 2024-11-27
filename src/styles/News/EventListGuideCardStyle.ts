import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  > img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 4px;
  }

  > h3 {
    margin-top: 18px;
    font: var(--ContentsHeader);
    color: var(--Black);
  }

  > p {
    margin-top: 8px;
    font: var(--Caption);
    color: var(--M70);
  }
`;
