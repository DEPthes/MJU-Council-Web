import * as S from "@styles/ActivityReport/BusinessList/BusinessListComponentStyle";
import BusinessListItem from "./BusinessListItem";

const BusinessListComponent = () => {
  return (
    <S.Container>
      <BusinessListItem
        title={"title"}
        Author={"Author"}
        date={"2024.11.12"}
        isEnd={false}
      />
      <BusinessListItem
        title={"title"}
        Author={"Author"}
        date={"2024.11.12"}
        isEnd={false}
      />
      <BusinessListItem
        title={"title"}
        Author={"Author"}
        date={"2024.11.12"}
        isEnd={false}
      />
      <BusinessListItem
        title={"title"}
        Author={"Author"}
        date={"2024.11.12"}
        isEnd={true}
      />
    </S.Container>
  );
};

export default BusinessListComponent;
