import * as S from "../../../styles/Introduction/Organization/OrganizationContent";
import { useEffect, useState } from "react";
import dummyData from "../../../assets/banner_dummy.json";

const OrganizationContent = () => {
    const [links, setLinks] = useState<string[]>([]);
  
    useEffect(() => {
      const extractedLinks = dummyData.map((item: { link: string }) => item.link);
      setLinks(extractedLinks);
    }, []);
  
    return (
      <S.OCDiv>
        {links.map((link, index) => (
          <S.OCImg key={index} src={link} style={{ marginBottom: "16px" }} />
        ))}
      </S.OCDiv>
    );
  };

export default OrganizationContent;
