import CoalitionItem from "@/components/ActivityReport/Coalition/CoalitionItem";
import PageComponent from "@/components/common/PageComponent";
import { useCoalitionList } from "@/hooks/activityReport/useCoalition";
import * as S from "@styles/ActivityReport/Coalition/CoalitionPageStyle";
import { useSearchParams } from "react-router-dom";

const CoalitionPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const { data } = useCoalitionList({ page: Number(page) });
  const coalitionList = data.information.contents;
  const totalPage = data.information.totalPage;

  return (
    <S.Container>
      {" "}
      {coalitionList.length > 0 ? (
        <S.ItemContainer>
          {coalitionList.slice(0, 8).map((coalition) => (
            <CoalitionItem key={coalition.allianceId} item={coalition} />
          ))}
        </S.ItemContainer>
      ) : (
        <S.EmptyText>재휴현황이 없습니다.</S.EmptyText>
      )}
      {coalitionList.length > 0 && <PageComponent totalPage={totalPage} />}
    </S.Container>
  );
};

export default CoalitionPage;
