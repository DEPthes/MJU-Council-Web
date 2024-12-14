import { getEachPart } from "@/apis/introduction";
import * as S from "../../../styles/Introduction/EachPartIntroduction/EachPartIntroductionContent";
import { useEffect, useState } from "react";

const EachPartIntroductionContent = () => {
  // API에서 가져온 데이터를 저장하는 상태
  const [links, setLinks] = useState<
    { imgUrl: string; description: string }[]
  >([]);

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEachPart();

        if (response.check) {
          setLinks(response.information);
        } else {
          console.error("데이터를 가져오지 못했습니다:", response.message);
        }
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.EPDiv>
      {links.map((item, index) => (
        <S.EPImgDiv key={index} style={{ marginBottom: "16px" }}>
          <S.EPImg src={item.imgUrl}/>
          <S.EPP>{item.description}</S.EPP>
        </S.EPImgDiv>
      ))}
    </S.EPDiv>
  );
};

export default EachPartIntroductionContent;
