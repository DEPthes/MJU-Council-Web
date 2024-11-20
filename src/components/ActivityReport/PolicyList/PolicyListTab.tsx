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
  return (
    <S.Container>
      {tabList.map((tabItem, index) => (
        <S.TabWrap>
          <S.TabItem
            key={tabItem}
            $selected={tab === tabItem}
            $isEnd={index === tabList.length - 1}
            onClick={() => onClick(tabItem)}
          >
            {tabItem}
          </S.TabItem>
          {index < tabList.length - 1 && <S.Line />}
        </S.TabWrap>
      ))}
    </S.Container>
  );
};

export default PolicyListTab;
