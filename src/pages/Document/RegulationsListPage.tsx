import RegulationsListItem from "@/components/Document/RegulationsListItem";
import { useNavigate } from "react-router-dom";
import * as S from "@styles/Document/RegulationsListPageStyle";

const RegulationsListPage = () => {
  const navigate = useNavigate();

  const RegulationsList = {
    check: true,
    information: {
      pageResponse: {
        page: 1,
        size: 10, // 예시
        totalElements: 50,
        totalPages: 5,
      },
      meetLists: [
        {
          id: 1,
          write: "관리자",
          title: "회칙 및 세칙이다1",
          date: "2024-11-17",
          fileUrl: "https://councill-s3-bucket/aethkefjdif.pdf",
        },
        {
          id: 2,
          write: "관리자",
          title: "회칙 및 세칙이다2",
          date: "2024-11-17",
          fileUrl: "https://councill-s3-bucket/aethkefjdif.pdf",
        },
      ],
    },
  };

  return (
    <S.Container>
      {RegulationsList.information.meetLists.map((item, index) => {
        return (
          <RegulationsListItem
            key={index}
            index={index}
            title={item.title}
            date={item.date.replaceAll("-", ".")}
            fileUrl={item.fileUrl}
            onClick={() => navigate(`/document/minutes/${item.id}`)}
          />
        );
      })}
    </S.Container>
  );
};

export default RegulationsListPage;
