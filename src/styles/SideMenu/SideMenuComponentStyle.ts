import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideDiv = styled.div`
  display: flex;
`;

export const OverLay = styled.div<{isOpen:boolean}>`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정 배경 */
  z-index: 10; /* 메뉴 컨테이너 아래에 위치 */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;
  right: 0;
  width: 86%;
  height: calc(100% - 60px);
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 20;
  overflow-y: auto;
`;

export const MenuItem = styled.div<{eachMenuOpen:boolean}>`
  display: flex;
  height: 48px;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-dircetion: row;
  border-bottom: ${({eachMenuOpen})=> eachMenuOpen? ``:`1px solid var(--M30)`};
  cursor: pointer;
  background-color: ${({eachMenuOpen})=> eachMenuOpen? `var(--Primary)`:`var(--White)`};
  color: ${({eachMenuOpen})=> eachMenuOpen? `var(--White)`:`var(--Primary)`};
  font: var(--MenuTitle);
  margin-right: auto;
`;

export const ArrowImg = styled.img`
  display:flex;
  flex-direction: row;
`;

export const SubMenu = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  border-bottom: 1px solid var(--M30);
  background-color: var(--M5);
  padding: 8px 0;
`;

export const Div = styled(Link)`
  display: flex;
  padding: 4px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  color: var(--Primary);
  font: var(--HeaderTitle);
  text-decoration-line: none;
  cursor: pointer;
`;

