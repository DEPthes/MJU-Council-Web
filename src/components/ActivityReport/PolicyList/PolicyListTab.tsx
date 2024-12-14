import { usePromiseCategory } from "@/hooks/activityReport/policy/usePromise";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyListTabStyle";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PolicyListTab = () => {
  const { data } = usePromiseCategory();
  const categoryList = data.information;

  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if (!tab) {
      setSearchParams({ tab: categoryList[0].title });
    }
  }, [searchParams, setSearchParams, tab]);

  const handleClickTab = (title: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("tab", title);
    setSearchParams(updatedParams);
  };

  return (
    <S.Container>
      {categoryList.map((tabItem, index) => (
        <S.TabWrap key={tabItem.promiseCategoryId}>
          <S.TabItem
            $selected={tab === tabItem.title}
            $isEnd={index === categoryList.length - 1}
            onClick={() => handleClickTab(tabItem.title)}
          >
            {tabItem.title}
          </S.TabItem>
          {index < categoryList.length - 1 && <S.Line />}
        </S.TabWrap>
      ))}
    </S.Container>
  );
};

export default PolicyListTab;
