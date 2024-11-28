import styled from "styled-components";

export const Div = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  padding: 0;
`;

export const ImgDiv = styled.div<{ activeSection: number }>`
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
    ${({ activeSection }) => {
      const sections = [
        "linear-gradient(to right, var(--Primary) 0%, var(--Primary) 25%, var(--M30) 25%, var(--M30) 100%)",
        "linear-gradient(to right, var(--M30) 0%, var(--M30) 25%, var(--Primary) 25%, var(--Primary) 50%, var(--M30) 50%, var(--M30) 100%)",
        "linear-gradient(to right, var(--M30) 0%, var(--M30) 50%, var(--Primary) 50%, var(--Primary) 75%, var(--M30) 75%, var(--M30) 100%)",
        "linear-gradient(to right, var(--M30) 0%, var(--M30) 75%, var(--Primary) 75%, var(--Primary) 100%)",
      ];
      return `
                background: ${sections[activeSection]};
            `;
    }}
  }
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: 390px;
  object-fit: cover;
  object-position: center;
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

export const P = styled.p`
  display: flex;
  color: var(--M5);
  text-align: center;
  margin: 0;
  font: var(--ListTitle);
`;

export const ArrowImg = styled.img`
  margin: 0 0 0 4px;
`;
