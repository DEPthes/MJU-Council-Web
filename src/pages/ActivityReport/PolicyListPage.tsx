import PolicyListComponent from "@/components/ActivityReport/PolicyList/PolicyListComponent";
import PolicyListTab from "@/components/ActivityReport/PolicyList/PolicyListTab";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyListPageStyle";
import { useState } from "react";

const PolicyListPage = () => {
  const tabList = ["권리", "교육", "복지 문화", "소통", "취업", "시설"];
  const [tab, setTab] = useState<(typeof tabList)[number]>(tabList[0]);

  const handleTabClick = (newTab: (typeof tabList)[number]) => {
    setTab(newTab);
  };

  return (
    <S.Container>
      <PolicyListTab tabList={tabList} tab={tab} onClick={handleTabClick} />
      <PolicyListComponent tab={tab} />
    </S.Container>
  );
};

export default PolicyListPage;
