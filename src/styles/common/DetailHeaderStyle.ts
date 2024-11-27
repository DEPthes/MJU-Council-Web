import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 20px;
  border-bottom: 1px solid var(--M5);

  > hr {
    width: 24px;
    border-bottom: 4px solid var(--Primary);
    margin: 0px;
  }

  > h1 {
    font: var(--SectionTitle);
    color: var(--Black);
    margin-top: 12px;
    margin-bottom: 20px;
  }

  > p {
    font: var(--Caption);
    color: var(--M70);
  }
`;
