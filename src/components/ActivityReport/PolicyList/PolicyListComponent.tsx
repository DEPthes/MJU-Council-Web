import * as S from "@styles/ActivityReport/PolicyList/PolicyListComponentStyle";
import PolicyListHeader from "./PolicyListHeader";
import PolicyListPromiseComponent from "./PolicyListPromiseComponent";

const PolicyListComponent = ({ tab }: { tab: string }) => {
  return (
    <S.Container>
      <PolicyListHeader text={tab} />
      <PolicyListPromiseComponent
        index={0 + 1}
        title={"재수강 학점 확대"}
        fulfillment={"이행 완료"}
        content={"content"}
      />
      <PolicyListPromiseComponent
        index={0 + 1}
        title={"재수강 학점 확대"}
        fulfillment={"이행 완료"}
        content={"content"}
      />{" "}
      <PolicyListPromiseComponent
        index={0 + 1}
        title={"재수강 학점 확대"}
        fulfillment={"이행 완료"}
        content={"content"}
      />
    </S.Container>
  );
};

export default PolicyListComponent;
