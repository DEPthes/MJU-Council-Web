import * as S from "../../../styles/Introduction/Organization/OrganizationContent";
import { useEffect, useState } from "react";
import { getOrganization } from "../../../apis/introduction";

const OrganizationContent = () => {
  const [organizations, setOrganizations] = useState<
    { title: string; imgUrl: string }[]
  >([]);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await getOrganization();
        if (response.check) {
          setOrganizations(response.information);
        } else {
          console.error("데이터를 가져오지 못했습니다:", response.message);
        }
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    fetchOrganization();
  }, []);

  return (
    <S.OCDiv>
      {organizations.map((organization, index) => (
        <S.OCImgDiv key={index}>
          <S.OCImg src={organization.imgUrl}/>
          <S.OCP>{organization.title}</S.OCP>
        </S.OCImgDiv>
      ))}
    </S.OCDiv>
  );
};

export default OrganizationContent;
