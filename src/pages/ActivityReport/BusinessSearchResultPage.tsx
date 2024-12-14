import BusinessListItem from "@/components/ActivityReport/BusinessLlist/BusinessListItem";
import PageComponent from "@/components/common/PageComponent";
import SearchComponent from "@/components/common/SearchComponent";
import { useBusinessList } from "@/hooks/activityReport/useBusiness";
import * as S from "@styles/ActivityReport/BusinessSearchResult/BusinessSearchResultStyle";
import { useNavigate, useSearchParams } from "react-router-dom";

const BusinessSearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const search = searchParams.get("search") || "";

  const { data } = useBusinessList({ page: Number(page), keyword: search });
  const businessListData = data.information.contents;
  const totalPage = data.information.totalPage;

  const navigator = useNavigate();

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

      case businessListData.length >= 1:
        return (
          <>
            <S.BusinessContainer>
              {businessListData.map((item, index) => (
                <BusinessListItem
                  key={item.businessId}
                  title={item.title}
                  // Author={item.Author}
                  Author={"총학생회"} // 총학생회 고정인지 확인 필요
                  date={item.createdAt}
                  isEnd={index >= businessListData.length - 1}
                  onClick={() =>
                    navigator(
                      `/activityReport/businessListDetail/${item.businessId}`
                    )
                  }
                />
              ))}
            </S.BusinessContainer>
            <PageComponent totalPage={totalPage} />
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
