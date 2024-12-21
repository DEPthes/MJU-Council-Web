import RegulationsListItem from "@/components/Document/RegulationsListItem";
import { useNavigate } from "react-router-dom";
import * as S from "@styles/Document/RegulationsListPageStyle";
import { useAllRegulations } from "@/hooks/regulations/useAllRegulations";

const RegulationsListPage = () => {
  const navigate = useNavigate();
  const { data } = useAllRegulations();

  return (
    <>
      {data.information.contents.length > 0 ? (
        <S.Container>
          {data.information.contents.map((item, index) => {
            return (
              <RegulationsListItem
                key={index}
                index={index}
                title={item.title}
                date={item.date.split("T")[0].replaceAll("-", ".")}
                fileUrl={item.fileUrls[0]}
                onClick={() =>
                  navigate(`/document/regulations/${item.regulationId}`)
                }
              />
            );
          })}
        </S.Container>
      ) : (
        <S.EmptyText>회칙 및 세칙이 없습니다.</S.EmptyText>
      )}
    </>
  );
};

export default RegulationsListPage;
