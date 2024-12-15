import BusinessListComponent from "@/components/ActivityReport/BusinessLlist/BusinessListComponent";
import PageComponent from "@/components/common/PageComponent";
import SearchComponent from "@/components/common/SearchComponent";
import { useBusinessList } from "@/hooks/activityReport/useBusiness";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListPageStyle";
import { useSearchParams } from "react-router-dom";

const BusinessListPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data } = useBusinessList({ page: Number(page) });
  const businessListData = data.information.contents;
  const totalPage = data.information.totalPage;
  return (
    <S.Container>
      <SearchComponent route={`/activityReport/businessSearchResult`} />
      <BusinessListComponent businessListData={businessListData} />
      <PageComponent totalPage={totalPage} />
    </S.Container>
  );
};

export default BusinessListPage;
