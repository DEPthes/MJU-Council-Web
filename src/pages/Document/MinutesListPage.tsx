import PageComponent from "@/components/common/PageComponent";
import SearchComponent from "@/components/common/SearchComponent";
import NoticeListItem from "@/components/News/NoticeListItem";
import { useMinutes } from "@/hooks/minutes/useMinutes";
import * as S from "@styles/News/NoticeListPageStyle";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const MinutesListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isSearch = searchParams.has("search");
  const initialSearch = searchParams.get("search") || "";
  const initialPage = parseInt(searchParams.get("page") || "1", 10) - 1;

  const [search, setSearch] = useState(initialSearch);
  const [page, setPage] = useState(initialPage);

  const { data } = useMinutes(page);

  useEffect(() => {
    setSearch(initialSearch);
    setPage(initialPage);
  }, [searchParams]);

  const renderComponent = () => {
    if (search && search.length < 2) {
      return (
        <S.EmptyText>
          "{search}"에 해당하는 검색 결과를 찾을 수 없습니다. <br />두 글자 이상
          입력하세요.
        </S.EmptyText>
      );
    }

    if (data.information.contents.length === 0) {
      return isSearch ? (
        <S.EmptyText>
          "{search}"에 해당하는 검색 결과를 찾을 수 없습니다.
        </S.EmptyText>
      ) : (
        <S.EmptyText>회의록이 없습니다.</S.EmptyText>
      );
    }

    return (
      <>
        <S.ListContainer>
          {data.information.contents.map((item, index) => {
            return (
              <NoticeListItem
                key={index}
                index={index}
                title={item.title}
                date={item.date.split("T")[0].replaceAll("-", ".")}
                onClick={() => navigate(`/document/minutes/${item.minuteId}`)}
              />
            );
          })}
        </S.ListContainer>
        <PageComponent totalPage={data.information.totalPage} />
      </>
    );
  };

  return (
    <div>
      <SearchComponent route={""} />
      {renderComponent()}
    </div>
  );
};

export default MinutesListPage;
