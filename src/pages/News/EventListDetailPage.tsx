import EventListDetail from "@/components/News/EventListDetail";
import EventListGuideCard from "@/components/News/EventListGuideCard";
import { useEvent } from "@/hooks/event/useEvent";
import * as S from "@styles/News/EventListDetailPageStyle";
import { useNavigate, useParams } from "react-router-dom";

const EventListDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data } = useEvent(Number(id));

  return (
    <div>
      <EventListDetail
        images={data.information.images}
        title={data.information.title}
        date={
          data.information.startDate.replaceAll("-", ".") +
          " ~ " +
          data.information.endDate.replaceAll("-", ".")
        }
        content={data.information.content}
      />
      {data.information.eventDetails.length > 0 && (
        <S.GuideWrap>
          <h2>행사 안내</h2>
          <hr />
          <S.GuideItemWrap>
            {data.information.eventDetails.map((item, index) => {
              return (
                <EventListGuideCard
                  key={index}
                  cover={item.cover}
                  title={item.title}
                  date={item.createdAt.replaceAll("-", ".")}
                  onClick={() =>
                    navigate(`/news/event/${id}/${item.eventDetailId}`)
                  }
                />
              );
            })}
          </S.GuideItemWrap>
        </S.GuideWrap>
      )}
    </div>
  );
};

export default EventListDetailPage;
