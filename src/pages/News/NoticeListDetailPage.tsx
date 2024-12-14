import GoListButton from "@/components/common/GoListButton";
import DetailContent from "@/components/News/DetailContent";
import DetailHeader from "@/components/common/DetailHeader";
import { useNotice } from "@/hooks/notice/useNotice";
import { useParams } from "react-router-dom";

const NoticeListDetailPage = () => {
  const { id } = useParams();
  const { data } = useNotice(Number(id));

  return (
    <div>
      <DetailHeader
        title={data.information.title}
        date={data.information.createdAt.replaceAll("-", ".")}
      />
      <DetailContent
        images={data.information.images}
        content={data.information.content}
        files={data.information.files}
      />
      <GoListButton />
    </div>
  );
};

export default NoticeListDetailPage;
