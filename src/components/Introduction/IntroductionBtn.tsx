import * as S from "../../styles/Introduction/IntroductionBtn";
import React from "react";

interface IntroductionBtnProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const IntroductionBtn: React.FC<IntroductionBtnProps> = ({ activeSection, setActiveSection }) => {
  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      <S.Container>
        <S.Div style={{ marginTop: "0", marginBottom: "2px" }}>
          <S.IntroBtn
            isActive={activeSection === "소개"}
            onClick={() => handleButtonClick("소개")}
          >
            소개
          </S.IntroBtn>
          <S.IntroBtn
            isActive={activeSection === "조직도"}
            onClick={() => handleButtonClick("조직도")}
          >
            조직도
          </S.IntroBtn>
        </S.Div>
        <S.Div>
          <S.IntroBtn
            isActive={activeSection === "국별 업무 소개"}
            onClick={() => handleButtonClick("국별 업무 소개")}
          >
            국별 업무 소개
          </S.IntroBtn>
          <S.IntroBtn
            isActive={activeSection === "중앙운영위원회"}
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
