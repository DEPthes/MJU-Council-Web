import * as S from "../../styles/Introduction/IntroductionContent";
import { useEffect, useState } from "react";

import Banner1 from "@/assets/image/Banner1.svg?react";
import Banner2 from "@/assets/image/Banner2.svg?react";

interface Content {
  link: JSX.Element;
  content: string;
}

const IntroductionContent = () => {
  const [content, setContent] = useState<Content[]>([]);

  const dummyData = [
    {
        "link": <Banner1 width={"100%"}/>,
        "content":"이미지 설명1"
    },
    {
        "link": <Banner2 width={"100%"}/>,
        "content":"이미지 설명2"
    }
]

  useEffect(() => {
    setContent(dummyData);
  }, []);

  return (
    <S.ICDiv>
      {content.map((item, index) => (
        <S.ImgContent key={index} style={{ marginBottom: "16px" }}>
          {item.link}
          <S.ICP>{item.content}</S.ICP>
        </S.ImgContent>
      ))}
    </S.ICDiv>
  );
};

export default IntroductionContent;
