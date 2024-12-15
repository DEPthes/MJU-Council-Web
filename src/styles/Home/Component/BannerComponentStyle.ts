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

export const ImgDiv = styled.div<{ $activesection: number; $bannerCount: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 390px;
  overflow: hidden; /* 넘치는 이미지 숨기기 */

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px; /* border-bottom 높이 */
    ${({ $activesection, $bannerCount }) => {
      // 배너 개수에 따른 그라디언트 생성
      const sections = Array.from({ length: $bannerCount }, (_, index) => {
        const start = (index / $bannerCount) * 100;
        const end = ((index + 1) / $bannerCount) * 100;
        return index === $activesection
          ? `var(--Primary) ${start}%, var(--Primary) ${end}%`
          : `var(--M30) ${start}%, var(--M30) ${end}%`;
      });
      return `background: linear-gradient(to right, ${sections.join(", ")});`;
    }}
  }

  img {
    width: 100%;
    height: 100%; /* 부모의 높이를 채움 */
    object-fit: cover; /* 이미지가 div를 꽉 채우도록 설정 */
    object-position: center; /* 이미지의 중심을 기준으로 정렬 */
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
