import ActivityReportHeader from "@/components/ActivityReport/ActivityReportHeader";
import CoalitionDetailComponent from "@/components/ActivityReport/CoalitionDetail/CoalitionDetailComponent";
import FileButton from "@/components/common/FileButton";
import GoListButton from "@/components/common/GoListButton";
import { useCoalitionDetail } from "@/hooks/activityReport/useCoalition";
import * as S from "@styles/ActivityReport/CoalitionDetail/CoalitionDetailPageStyle";
import { useParams } from "react-router-dom";

const CoalitionDetailPage = () => {
  const { id } = useParams();
  const { data } = useCoalitionDetail(Number(id));
  const coalitionInfo = data.information;
  const date = `${coalitionInfo.startDate} ~ ${coalitionInfo.endDate}`;
  const fileList = coalitionInfo.files;

  return (
    <S.Container>
      <ActivityReportHeader text={coalitionInfo.title} subText={date} />
      <CoalitionDetailComponent
        text={coalitionInfo.content}
        images={coalitionInfo.images}
      />
      {fileList.map((file) => (
        <FileButton key={file.id} fileUrl={file.url} fileName={file.name} />
      ))}
      <GoListButton />
    </S.Container>
  );
};

export default CoalitionDetailPage;
