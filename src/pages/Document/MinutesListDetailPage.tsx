import DetailHeader from "@/components/common/DetailHeader";
import GoListButton from "@/components/common/GoListButton";
import DetailContent from "@/components/News/DetailContent";
import { useMinutesDetail } from "@/hooks/minutes/useMinutesDetail";
import { useParams } from "react-router-dom";

const MinutesListDetailPage = () => {
  const { id } = useParams();
  const { data } = useMinutesDetail(Number(id));

  return (
    <div>
      <DetailHeader
        title={data.information.title}
        date={
          "총학생회 ┃  " +
          data.information.date.split("T")[0].replaceAll("-", ".")
        }
      />
      <DetailContent
        content={data.information.content}
        files={data.information.files.map((file) => ({
          id: file.minuteFileId,
          name: file.fileName,
          url: file.fileUrl,
        }))}
        images={[]}
      />
      <GoListButton />
    </div>
  );
};

export default MinutesListDetailPage;
