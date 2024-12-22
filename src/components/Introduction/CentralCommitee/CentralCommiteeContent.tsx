import { useEffect, useState } from "react";
import * as S from "../../../styles/Introduction/CentralCommitee/CentralCommiteeContent";
import { getCommittees } from "@/apis/introduction";

const CentralCommiteeContent = () => {
    const [committees, setCommittees] = useState<any[]>([]);
    
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
    
    return(
        <>
            <S.CDiv>
                {committees.map((committee, index) => (
                    committee.description!=null &&
                    <S.SODiv key={index}>
                    {committee.imgUrl && (
                        <S.Image>
                        <img src={committee.imgUrl}/>
                        </S.Image>
                    )}
                    <S.TextDiv><S.SmallP style={{ whiteSpace: "pre-line" }}>{committee.description}</S.SmallP></S.TextDiv>
                    </S.SODiv>
                ))}
                <S.Content>
                    <S.PDiv>
                        <S.BigP>제30조(지위)</S.BigP>
                        <S.SmallP>중앙운영위원회(이하 '중운위')는 확운위 다음 최고 기구이다.</S.SmallP>
                    </S.PDiv>
                    <S.PDiv>
                        <S.BigP>제31조(구성)</S.BigP>
                        <S.SmallP>1. 중운위는 총학생회장, 부총학생회장, 단과대학 학생회장 및 대표자, 총동아리연합회장 및 대표자로 구성한다.</S.SmallP>
                        <S.SmallP>2. 대표자는 회장이 존재하지 않는 경우, 각 학생자치기구를 대표할 수 있는 자를 말한다.</S.SmallP>
                    </S.PDiv>
                </S.Content>
            </S.CDiv>
        </>
    );
};

export default CentralCommiteeContent;
