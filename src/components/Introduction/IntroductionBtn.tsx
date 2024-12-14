import * as S from "../../styles/Introduction/IntroductionBtn";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IntroductionBtnProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const IntroductionBtn: React.FC<IntroductionBtnProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = (section: string) => {
    setActiveSection(section); // 상태 업데이트
    navigate(route(section)); // 라우팅
  };

  const route = (section: string) => {
    switch (section) {
      case "소개":
        return "/introduction/introduce";
      case "조직도":
        return "/introduction/organization";
      case "국별 업무 소개":
        return "/introduction/eachpart";
      case "중앙운영위원회":
        return "/introduction/centralcommitee";
      default:
        return "/introduction/introduce";
    }
  };

  return (
    <>
      <S.Container>
        <S.Div style={{ marginTop: "0", marginBottom: "2px" }}>
          <S.IntroBtn
            $isactive={activeSection === "소개"?"true":"false"}
            onClick={() => handleButtonClick("소개")}
          >
            소개
          </S.IntroBtn>
          <S.IntroBtn
            $isactive={activeSection === "조직도"?"true":"false"}
            onClick={() => handleButtonClick("조직도")}
          >
            조직도
          </S.IntroBtn>
        </S.Div>
        <S.Div>
          <S.IntroBtn
            $isactive={activeSection === "국별 업무 소개"?"true":"false"}
            onClick={() => handleButtonClick("국별 업무 소개")}
          >
            국별 업무 소개
          </S.IntroBtn>
          <S.IntroBtn
            $isactive={activeSection === "중앙운영위원회"?"true":"false"}
            onClick={() => handleButtonClick("중앙운영위원회")}
          >
            중앙운영위원회
          </S.IntroBtn>
        </S.Div>
      </S.Container>
    </>
  );
};

export default IntroductionBtn;
