import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
`;

export const ImgDiv = styled.div<{ activesection: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px; /* border-bottom 높이 */
    ${({ activesection }) => {
      const sections = [
        "linear-gradient(to right, var(--Primary) 0%, var(--Primary) 25%, var(--M30) 25%, var(--M30) 100%)",
        "linear-gradient(to right, var(--M30) 0%, var(--M30) 25%, var(--Primary) 25%, var(--Primary) 50%, var(--M30) 50%, var(--M30) 100%)",
        "linear-gradient(to right, var(--M30) 0%, var(--M30) 50%, var(--Primary) 50%, var(--Primary) 75%, var(--M30) 75%, var(--M30) 100%)",
        "linear-gradient(to right, var(--M30) 0%, var(--M30) 75%, var(--Primary) 75%, var(--Primary) 100%)",
      ];
      return `
                background: ${sections[activesection]};
            `;
    }}
  }
  svg{
    width: 100%;
    height: 390px;
    justify-content: center;
    aligh-items:center;
    object-fit: cover;
  }
`;


export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 150px);
`;

export const P = styled(Link)`
  display: flex;
  color: var(--M5);
  text-align: center;
  margin: 0;
  font: var(--ListTitle);
  text-decoration: none;
`;

export const ArrowImg = styled.img`
  margin: 0 0 0 4px;
`;
