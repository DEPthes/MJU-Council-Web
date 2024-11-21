import BusinessListComponent from "@/components/ActivityReport/BusinessLlist/BusinessListComponent";
import BusinessListPageComponent from "@/components/ActivityReport/BusinessLlist/BusinessListPageComponent";
import BusinessSearchComponent from "@/components/ActivityReport/BusinessLlist/BusinessSearchComponent";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListPageStyle";

const BusinessListPage = () => {
  return (
    <S.Container>
      <BusinessSearchComponent />
      <BusinessListComponent />
      <BusinessListPageComponent />
    </S.Container>
  );
};

export default BusinessListPage;
