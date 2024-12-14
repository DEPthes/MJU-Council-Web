import { usePromiseCategory } from "@/hooks/activityReport/policy/usePromiseCategory";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyListTabStyle";

const PolicyListTab = ({
  tabList,
  tab,
  onClick,
}: {
  tabList: string[];
  tab: string;
  onClick: (tab: string) => void;
}) => {
  const { data } = usePromiseCategory();
  const categoryList = data.information;

  return (
    <S.Container>
      {categoryList.map((tabItem, index) => (
        <S.TabWrap key={tabItem.promiseCategoryId}>
          <S.TabItem
            $selected={tab === tabItem.title}
            $isEnd={index === tabList.length - 1}
            onClick={() => onClick(tabItem.title)}
          >
            {tabItem.title}
          </S.TabItem>
          {index < tabList.length - 1 && <S.Line />}
        </S.TabWrap>
      ))}
    </S.Container>
  );
};

export default PolicyListTab;
