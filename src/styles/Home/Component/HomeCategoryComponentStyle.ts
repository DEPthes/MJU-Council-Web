import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
  gap: 12px;
`;

export const Img = styled.img`
  display: flex;
  padding: 12px;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--M30);
  background-color: white;
  cursor: pointer;
`;

export const Indiv = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  width: 16%;
`;

export const CName = styled.p`
  text-align: center;
  margin-top: 8px;

  color: var(--Primary);
  text-align: center;
  font: var(--NavigationTitle);
`;
