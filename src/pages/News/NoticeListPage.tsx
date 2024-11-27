import PageComponent from "@/components/common/PageComponent";
import SearchComponent from "@/components/common/SearchComponent";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "@styles/News/NoticeListPageStyle";
import NoticeListItem from "@/components/News/NoticeListItem";

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isSearch = searchParams.has("search");
  const search = searchParams.get("search") || "";

  const NoticeList = {
    check: true,
    information: {
      pageResponse: {
        page: 1,
        size: 10,
        totalElements: 50,
        totalPages: 5,
      },
      noticeList: [
        {
          noticeId: 1,
          title: "공지사항001",
          createdDate: "2024-11-17",
        },
        {
          noticeId: 2,
          title: "공지사항001",
          createdDate: "2024-11-17",
        },
        {
          noticeId: 3,
          title: "공지사항제목공지사항제목공지사항앙",
          createdDate: "2024-11-17",
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
          {NoticeList.information.noticeList.map((item, index) => {
            return (
              <NoticeListItem
                key={index}
                index={index}
                title={item.title}
                date={item.createdDate.replaceAll("-", ".")}
                onClick={() => navigate(`/news/notice/${item.noticeId}`)}
              />
            );
          })}
        </S.ListContainer>
        <PageComponent
          totalPage={NoticeList.information.pageResponse.totalPages}
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

export default NoticeListPage;
