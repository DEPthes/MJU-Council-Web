import BusinessListComponent from "@/components/ActivityReport/BusinessLlist/BusinessListComponent";
import BusinessListPageComponent from "@/components/ActivityReport/BusinessLlist/BusinessListPageComponent";
import SearchComponent from "@/components/common/BusinessSearchComponent";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListPageStyle";

const BusinessListPage = () => {
  return (
    <S.Container>
      <SearchComponent />
      <BusinessListComponent />
      <BusinessListPageComponent />
    </S.Container>
  );
};

export default BusinessListPage;
