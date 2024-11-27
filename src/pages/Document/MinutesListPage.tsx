import PageComponent from "@/components/common/PageComponent";
import SearchComponent from "@/components/common/SearchComponent";
import NoticeListItem from "@/components/News/NoticeListItem";
import * as S from "@styles/News/NoticeListPageStyle";
import { useNavigate, useSearchParams } from "react-router-dom";

const MinutesListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isSearch = searchParams.has("search");
  const search = searchParams.get("search") || "";

  const MinutesList = {
    check: true,
    information: {
      pageResponse: {
        page: 1,
        size: 10,
        totalElements: 50,
        totalPages: 5,
      },
      meetLists: [
        {
          id: 1,
          write: "관리자",
          title: "회의록이다1",
          date: "2024-11-17",
        },
        {
          id: 2,
          write: "관리자",
          title: "회의록이다2",
          date: "2024-11-17",
        },
      ],
    },
  };

  const randerComponent = () => {
    if (isSearch) {
      if (search.length < 2) {
        return (
          <S.EmptyText>
            "{search}"에 해당하는 검색 결과를 찾을 수 없습니다. <br />두 글자
            이상 입력하세요.
          </S.EmptyText>
        );
      } else {
        if (search === "김피탕") {
          return (
            <S.EmptyText>
              "{search}"에 해당하는 검색 결과를 찾을 수 없습니다. <br />두 글자
              이상 입력하세요.
            </S.EmptyText>
          );
        }
      }
    }
    return (
      <>
        <S.ListContainer>
          {MinutesList.information.meetLists.map((item, index) => {
            return (
              <NoticeListItem
                key={index}
                index={index}
                title={item.title}
                date={item.date.replaceAll("-", ".")}
                onClick={() => navigate(`/document/minutes/${item.id}`)}
              />
            );
          })}
        </S.ListContainer>
        <PageComponent
          totalPage={MinutesList.information.pageResponse.totalPages}
        />
      </>
    );
  };

  return (
    <div>
      <SearchComponent route={""} />
      {randerComponent()}
    </div>
  );
};

export default MinutesListPage;
