import { Search } from "@/assets/common";
import * as S from "@/styles/common/SearchComponentStyle";

const SearchComponent = () => {
  return (
    <S.Container>
      <S.SearchBar />
      <S.SearchIconContainer>
        <Search />
      </S.SearchIconContainer>
    </S.Container>
  );
};

export default SearchComponent;
