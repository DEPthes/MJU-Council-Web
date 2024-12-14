import { Search } from "@/assets/common";
import * as S from "@/styles/common/SearchComponentStyle";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface SearchComponentProps {
  route: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ route }) => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("search") || "";

  const navigate = useNavigate();
  const [search, setSearch] = useState<string>(searchParam);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`${route}?search=${encodeURIComponent(search)}`);
  };

  return (
    <S.Container>
      <S.SearchBar type="text" value={search} onChange={handleSearchChange} />
      <S.SearchIconContainer onClick={handleSearchSubmit}>
        <Search />
      </S.SearchIconContainer>
    </S.Container>
  );
};

export default SearchComponent;
