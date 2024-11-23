import { Search } from "@/assets/common";
import * as S from "@styles/ActivityReport/BusinessList/BusinessSearchComponentStyle";

const BusinessSearchComponent = () => {
  return (
    <S.Container>
      <S.SearchBar />
      <S.SearchIconContainer>
        <Search />
      </S.SearchIconContainer>
    </S.Container>
  );
};

export default BusinessSearchComponent;
