import PolicyListComponent from "@/components/ActivityReport/PolicyList/PolicyListComponent";
import PolicyListTab from "@/components/ActivityReport/PolicyList/PolicyListTab";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyListPageStyle";

const PolicyListPage = () => {
  return (
    <S.Container>
      <PolicyListTab />
      <PolicyListComponent />
    </S.Container>
  );
};

export default PolicyListPage;
