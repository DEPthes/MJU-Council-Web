import ActivityReportHeader from "@/components/ActivityReport/ActivityReportHeader";
import BusinessDetailComponent from "@/components/ActivityReport/BusinessDetail/BusinessDetailComponent";
import GoListButton from "@/components/common/GoListButton";
import * as S from "@styles/ActivityReport/BusinessDetail/BusinessListDetailPageStyle";

const BusinessListDetailPage = () => {
  // const { id } = useParams();
  const dummyAuthor = "총학생회";
  const dummyDate = "2024.11.09";
  const subText = `${dummyAuthor} | ${dummyDate}`;
  return (
    <S.Container>
      <ActivityReportHeader text={"Title"} subText={subText} />
      <BusinessDetailComponent />
      <GoListButton />
    </S.Container>
  );
};

export default BusinessListDetailPage;
