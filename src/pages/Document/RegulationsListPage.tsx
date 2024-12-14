import RegulationsListItem from "@/components/Document/RegulationsListItem";
import { useNavigate } from "react-router-dom";
import * as S from "@styles/Document/RegulationsListPageStyle";
import { useAllRegulations } from "@/hooks/regulations/useAllRegulations";

const RegulationsListPage = () => {
  const navigate = useNavigate();
  const { data } = useAllRegulations();

  return (
    <S.Container>
      {data.information.contents.map((item, index) => {
        return (
          <RegulationsListItem
            key={index}
            index={index}
            title={item.title}
            date={item.date.split("T")[0].replaceAll("-", ".")}
            fileUrl="수정필요"
            onClick={() =>
              navigate(`/document/regulations/${item.regulationId}`)
            }
          />
        );
      })}
    </S.Container>
  );
};

export default RegulationsListPage;
