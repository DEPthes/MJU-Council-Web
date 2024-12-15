import ActivityReportHeader from "@/components/ActivityReport/ActivityReportHeader";
import BusinessDetailComponent from "@/components/ActivityReport/BusinessDetail/BusinessDetailComponent";
import GoListButton from "@/components/common/GoListButton";
import { useBusinessDetail } from "@/hooks/activityReport/useBusiness";
import * as S from "@styles/ActivityReport/BusinessDetail/BusinessListDetailPageStyle";
import { useParams } from "react-router-dom";

const BusinessListDetailPage = () => {
  const { id } = useParams();

  const { data } = useBusinessDetail(Number(id));

  const dummyAuthor = "총학생회";
  const dummyDate = data.information.createdAt;
  const title = data.information.title;
  const subText = `${dummyAuthor} | ${dummyDate}`;
  const businessInformation = data.information;
  return (
    <S.Container>
      <ActivityReportHeader text={title} subText={subText} />
      <BusinessDetailComponent businessInformation={businessInformation} />
      <GoListButton />
    </S.Container>
  );
};

export default BusinessListDetailPage;
