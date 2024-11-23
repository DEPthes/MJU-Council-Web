import ActivityReportHeader from "@/components/ActivityReport/ActivityReportHeader";
import BusinessDetailComponent from "@/components/ActivityReport/BusinessDetail/BusinessDetailComponent";
import * as S from "@styles/ActivityReport/BusinessDetail/BusinessListDetailPageStyle";
import { useNavigate } from "react-router-dom";

const BusinessListDetailPage = () => {
  const navigate = useNavigate();
  const dummyAuthor = "총학생회";
  const dummyDate = "2024.11.09";
  const subText = `${dummyAuthor} | ${dummyDate}`;
  return (
    <S.Container>
      <ActivityReportHeader text={"Title"} subText={subText} />
      <BusinessDetailComponent />
      <S.ButtonContainer onClick={() => navigate(-1)}>
        <S.GoListButton>목록으로</S.GoListButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default BusinessListDetailPage;
