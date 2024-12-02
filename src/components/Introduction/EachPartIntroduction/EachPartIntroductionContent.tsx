import * as S from "../../../styles/Introduction/EachPartIntroduction/EachPartIntroductionContent";
import { useEffect, useState } from "react";
import Banner1 from "@/assets/image/Banner1.svg?react";
import Banner2 from "@/assets/image/Banner2.svg?react";
import Banner3 from "@/assets/image/Banner3.svg?react";
import Banner4 from "@/assets/image/Banner4.svg?react";

const EachPartIntroductionContent = () => {
    const [links, setLinks] = useState<{link: JSX.Element}[]>([]);

    const dummy = [
      {"link": <Banner1/>},
      {"link": <Banner2/>},
      {"link": <Banner3/>},
      {"link": <Banner4/>}
    ]
  
    useEffect(() => {
      setLinks(dummy);
    }, []);
  
    return (
      <S.EPDiv>
        {links.map((link, index) => (
          <S.EPImg key={index}>
            {link.link}
          </S.EPImg>
        ))}
      </S.EPDiv>
    );
  };

export default EachPartIntroductionContent;
