import BusinessListComponent from "@/components/ActivityReport/BusinessLlist/BusinessListComponent";
import PageComponent from "@/components/common/PageComponent";
import SearchComponent from "@/components/common/SearchComponent";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListPageStyle";

const BusinessListPage = () => {
  return (
    <S.Container>
      <SearchComponent route={`/activityReport/businessSearchResult`} />
      <BusinessListComponent />
      <PageComponent totalPage={15} />
    </S.Container>
  );
};

export default BusinessListPage;
