import PageComponent from "@/components/common/PageComponent";
import SearchComponent from "@/components/common/SearchComponent";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "@styles/News/NoticeListPageStyle";
import NoticeListItem from "@/components/News/NoticeListItem";
import { useNotices } from "@/hooks/notice/useNotices";
import { useEffect, useState } from "react";

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isSearch = searchParams.has("search");
  const initialSearch = searchParams.get("search") || "";
  const initialPage = parseInt(searchParams.get("page") || "1", 10) - 1;

  const [search, setSearch] = useState(initialSearch);
  const [page, setPage] = useState(initialPage);

  const { data } = useNotices(page, search);

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
        <S.EmptyText>공지사항이 없습니다.</S.EmptyText>
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
                date={item.createdAt.replaceAll("-", ".")}
                onClick={() => navigate(`/news/notice/${item.noticeId}`)}
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

export default NoticeListPage;
