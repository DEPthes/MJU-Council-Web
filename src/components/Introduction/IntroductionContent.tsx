import * as S from "../../styles/Introduction/IntroductionContent";
import { useEffect, useState } from "react";
import dummyData from "../../assets/banner_dummy.json";

interface Content {
  link: string;
  content: string;
}

const IntroductionContent = () => {
  const [content, setContent] = useState<Content[]>([]);

  useEffect(() => {
    setContent(dummyData);
  }, []);

  return (
    <S.ICDiv>
      {content.map((item, index) => (
        <S.ImgContent key={index} style={{ marginBottom: "16px" }}>
          <S.ICImg src={item.link}/>
          <S.ICP>{item.content}</S.ICP>
        </S.ImgContent>
      ))}
    </S.ICDiv>
  );
};

export default IntroductionContent;
