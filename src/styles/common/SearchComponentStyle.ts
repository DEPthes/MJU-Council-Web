import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 40px 20px;
`;

export const SearchBar = styled.input`
  display: flex;
  background-color: var(--M5);
  border-radius: 4px 0 0 4px;
  border: 1px solid var(--M50);
  width: 100%;
  height: 100%;
  padding: 4px 20px;
  color: var(--Black);
  font: var(--HeaderTitle);
`;

export const SearchIconContainer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 0 4px 4px 0;
  background-color: var(--Primary);
`;
