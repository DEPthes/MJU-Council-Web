import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  height:60px;
`;
export const Nav = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position:fixed;
  top: 0;
  z-index: 100;
  background-color: white;
  border-bottom: 1px solid var(--M30);
`;

export const Logo = styled.img`
  height: 35px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Bar = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const CouncilText = styled.p`
  display: flex;
  margin-right: auto;
  color: var(--Primary);
  font: var(--HeaderTitle);
`;

export const Menu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding: 0;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`;
