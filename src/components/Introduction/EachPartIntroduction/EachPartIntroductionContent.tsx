import * as S from "../../../styles/Introduction/EachPartIntroduction/EachPartIntroductionContent";
import { useEffect, useState } from "react";
import dummyData from "../../../assets/banner_dummy.json";

const EachPartIntroductionContent = () => {
    const [links, setLinks] = useState<string[]>([]);
  
    useEffect(() => {
      const extractedLinks = dummyData.map((item: { link: string }) => item.link);
      setLinks(extractedLinks);
    }, []);
  
    return (
      <S.EPDiv>
        {links.map((link, index) => (
          <S.EPImg key={index} src={link} style={{ marginBottom: "16px" }} />
        ))}
      </S.EPDiv>
    );
  };

export default EachPartIntroductionContent;
