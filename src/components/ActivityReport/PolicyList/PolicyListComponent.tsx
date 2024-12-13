import * as S from "@styles/ActivityReport/PolicyList/PolicyListComponentStyle";
import ActivityReportHeader from "../ActivityReportHeader";
import PolicyListPromiseComponent from "./PolicyListPromiseComponent";

const PolicyListComponent = ({ tab }: { tab: string }) => {
  const data = [
    {
      id: 1,
      title: "재수강 학점 A0 확대",
      content: "블라블라블라",
      progress: 0,
    },
    {
      id: 2,
      title: "청소 꼼꼼히 하기",
      content: "블라블라블라",
      progress: 1,
    },
    {
      id: 3,
      title: "청소 꼼꼼히 ggg하기",
      content: "블라블라블라",
      progress: 2,
    },
  ];
  return (
    <S.Container>
      <ActivityReportHeader text={tab} />
      {data.map((item, index) => (
        <PolicyListPromiseComponent item={item} key={index} />
      ))}
    </S.Container>
  );
};

export default PolicyListComponent;
