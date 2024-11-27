import DetailHeader from "@/components/common/DetailHeader";
import GoListButton from "@/components/common/GoListButton";
import DocumentDetailContent from "@/components/Document/DocumentDetailContent";

const RegulationsListDetailPage = () => {
  const RegulationsDetail = {
    check: true,
    information: {
      id: 1,
      write: "관리자",
      title: "회칙 및 세칙이다",
      content: "회칙 및 세칙 내용이다",
      date: "2024-11-17",
      files: [
        {
          fileId: 1,
          fileName: "회칙 및 세칙 파일",
          fileUrl: "https://councill-s3-bucket/aethkefjdif.pdf",
        },
        {
          fileId: 2,
          fileName: "회칙 및 세칙 파일",
          fileUrl: "https://councill-s3-bucket/aethkefjdif.hwp",
        },
      ],
    },
  };

  return (
    <div>
      <DetailHeader
        title={RegulationsDetail.information.title}
        date={
          "총학생회 ┃  " +
          RegulationsDetail.information.date.replaceAll("-", ".")
        }
      />
      <DocumentDetailContent
        content={RegulationsDetail.information.content}
        files={RegulationsDetail.information.files}
      />
      <GoListButton />
    </div>
  );
};

export default RegulationsListDetailPage;
