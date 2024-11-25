import BusinessListItem from "@/components/ActivityReport/BusinessLlist/BusinessListItem";
import PageComponent from "@/components/common/PageComponent";
import SearchComponent from "@/components/common/SearchComponent";
import * as S from "@styles/ActivityReport/BusinessSearchResult/BusinessSearchResultStyle";
import { useNavigate, useSearchParams } from "react-router-dom";

const BusinessSearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const navigator = useNavigate();

  const businessListData = [
    {
      id: 1,
      title: "Project Alpha",
      Author: "Alice",
      date: "2024.11.12",
    },
    {
      id: 2,
      title: "Project Beta",
      Author: "Bob",
      date: "2024.11.13",
    },
    {
      id: 3,
      title: "Project Gamma",
      Author: "Charlie",
      date: "2024.11.14",
    },
    {
      id: 4,
      title: "Project Delta",
      Author: "David",
      date: "2024.11.15",
    },
  ];
  const randerComponent = () => {
    switch (true) {
      case !search || search.length < 2:
        return (
          <S.Text>
            "{search}"에 해당하는 검색 결과를 찾을 수 없습니다. <br />두 글자
            이상 입력하세요.
          </S.Text>
        );

      case businessListData.length === 0:
        return (
          <S.Text>"{search}"에 해당하는 검색 결과를 찾을 수 없습니다.</S.Text>
        );

      case businessListData.length > 1:
        return (
          <>
            <S.BusinessContainer>
              {businessListData.map((item, index) => (
                <BusinessListItem
                  key={item.id}
                  title={item.title}
                  Author={item.Author}
                  date={item.date}
                  isEnd={index >= businessListData.length - 1}
                  onClick={() =>
                    navigator(`/activityReport/businessListDetail/${item.id}`)
                  }
                />
              ))}
            </S.BusinessContainer>
            <PageComponent />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <S.Container>
      <SearchComponent route={`/activityReport/businessSearchResult`} />
      {randerComponent()}
    </S.Container>
  );
};

export default BusinessSearchResultPage;
