import { Search } from "@/assets/common";
import * as S from "@/styles/common/SearchComponentStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchComponentProps {
  route: string;
  value: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ route, value }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`${route}?search=${encodeURIComponent(search)}`);
  };

  return (
    <S.Container>
      <S.SearchBar type="text" value={value} onChange={handleSearchChange} />
      <S.SearchIconContainer onClick={handleSearchSubmit}>
        <Search />
      </S.SearchIconContainer>
    </S.Container>
  );
};

export default SearchComponent;
