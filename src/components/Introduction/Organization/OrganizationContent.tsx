import * as S from "../../../styles/Introduction/Organization/OrganizationContent";
import { useEffect, useState } from "react";
import Banner1 from "@/assets/image/Banner1.svg?react";
import Banner2 from "@/assets/image/Banner2.svg?react";
import Banner3 from "@/assets/image/Banner3.svg?react";
import Banner4 from "@/assets/image/Banner4.svg?react";

const OrganizationContent = () => {
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
      <S.OCDiv>
        {links.map((link, index) => (
          <S.OCImg key={index}>
            {link.link}
          </S.OCImg>
        ))}
      </S.OCDiv>
    );
  };

export default OrganizationContent;
