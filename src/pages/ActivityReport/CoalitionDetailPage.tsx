import ActivityReportHeader from "@/components/ActivityReport/ActivityReportHeader";
import CoalitionDetailComponent from "@/components/ActivityReport/CoalitionDetail/CoalitionDetailComponent";
import FileButton from "@/components/common/FileButton";
import GoListButton from "@/components/common/GoListButton";
import * as S from "@styles/ActivityReport/CoalitionDetail/CoalitionDetailPageStyle";

const CoalitionDetailPage = () => {
  const [title, date] = ["제휴 현황 제목", "2024.11.11 ~ 2024.11.11"];
  return (
    <S.Container>
      <ActivityReportHeader text={title} subText={date} />
      <CoalitionDetailComponent />
      <FileButton fileUrl="fad" fileName="af" />
      <GoListButton />
    </S.Container>
  );
};

export default CoalitionDetailPage;
