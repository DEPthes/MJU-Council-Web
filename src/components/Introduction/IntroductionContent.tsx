import * as S from "../../styles/Introduction/IntroductionContent";
import { useEffect, useState } from "react";

import { getIntroduce } from "@/apis/introduction";

interface Content {
  imgUrl: string;
  description: string;
}

const IntroductionContent = () => {
  const [content, setContent] = useState<Content[]>([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await getIntroduce();
  
        if(response.check){
          setContent(response.information);
        }else{
          console.error("데이터를 가져오지 못했습니다."+response.message);
        }
      }catch(error){
        console.log("API호출에러", error)
      }
    };

    fetchData();
  }, []);

  return (
    <S.ICDiv>
      {content.map((item, index) => (
        <S.ImgContent key={index} style={{ marginBottom: "16px" }}>
          <img src={item.imgUrl}/>
          <S.ICP style={{ whiteSpace: "pre-line" }}>
            {item.description}
          </S.ICP>
        </S.ImgContent>
      ))}
    </S.ICDiv>
  );
};

export default IntroductionContent;
