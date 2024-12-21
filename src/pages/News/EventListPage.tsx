import EventListCard from "@/components/News/EventListCard";
import { useEvents } from "@/hooks/event/useEvents";
import * as S from "@styles/Document/RegulationsListPageStyle";
import { useNavigate } from "react-router-dom";

const EventListPage = () => {
  const navigate = useNavigate();
  const { data } = useEvents();

  return (
    <>
      {data.information.length > 0 ? (
        <div style={{ marginBottom: 60 }}>
          {data.information.map((item, index) => {
            return (
              <EventListCard
                key={index}
                cover={item.cover}
                title={item.title}
                date={
                  item.startDate.replaceAll("-", ".") +
                  " ~ " +
                  item.endDate.replaceAll("-", ".")
                }
                onClick={() => navigate(`/news/event/${item.eventId}`)}
              />
            );
          })}
        </div>
      ) : (
        <S.EmptyText>행사가 없습니다.</S.EmptyText>
      )}
    </>
  );
};

export default EventListPage;
