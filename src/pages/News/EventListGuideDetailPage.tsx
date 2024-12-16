import GoListButton from "@/components/common/GoListButton";
import DetailContent from "@/components/News/DetailContent";
import DetailHeader from "@/components/common/DetailHeader";
import { useParams } from "react-router-dom";
import { useEventGuide } from "@/hooks/event/useEventGuide";

const EventListGuideDetailPage = () => {
  const { id, guideId } = useParams();
  const { data } = useEventGuide(Number(id), Number(guideId));

  return (
    <div>
      <DetailHeader
        title={data.information.title}
        date={"총학생회 ┃  " + data.information.createdAt.replaceAll("-", ".")}
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

export default EventListGuideDetailPage;
