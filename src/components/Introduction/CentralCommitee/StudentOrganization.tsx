import { useEffect, useState } from "react";
import * as S from "../../../styles/Introduction/CentralCommitee/StudentOrganization";
import insta from "../../../assets/image/Instagram_blue.svg";
import home from "../../../assets/image/Home_blue.svg";
import { getCommittees } from "../../../apis/introduction";

const StudentOrganization = () => {
  const [committees, setCommittees] = useState<any[]>([]);

  // 데이터 가져오기
  useEffect(() => {
    const fetchCommittees = async () => {
      try {
        const data = await getCommittees();
        if (data.check) {
          setCommittees(data.information);
        } else {
          console.error("API 에러: 데이터를 가져오지 못했습니다.");
        }
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    };

    fetchCommittees();
  }, []);

  return (
    <S.All>
      {committees.map((committee, index) => (
        <S.SODiv key={index}>
          <S.TextDiv>
            <S.TitleDiv>
              <S.Title>{committee.college}</S.Title>
            </S.TitleDiv>
            <S.ContentDiv>
              <S.Category>학생회</S.Category>
              <S.Name>{committee.name}</S.Name>
              <S.SocialLinks>
                {committee.snsUrl && (
                  <S.Tag href={committee.snsUrl}>
                    <img src={insta}/>
                  </S.Tag>
                )}
                {committee.pageUrl && (
                  <S.Tag href={committee.pageUrl}>
                    <img src={home}/>
                  </S.Tag>
                )}
              </S.SocialLinks>
            </S.ContentDiv>
          </S.TextDiv>
          {committee.imgUrl && (
            <S.Image>
              <img src={committee.imgUrl}/>
            </S.Image>
          )}
        </S.SODiv>
      ))}
    </S.All>
  );
};

export default StudentOrganization;
