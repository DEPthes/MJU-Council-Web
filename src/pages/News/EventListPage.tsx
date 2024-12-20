import EventListCard from "@/components/News/EventListCard";
import { useEvents } from "@/hooks/event/useEvents";
import * as S from "@styles/ActivityReport/Coalition/CoalitionPageStyle";
import { useNavigate } from "react-router-dom";

const EventListPage = () => {
  const navigate = useNavigate();
  const { data } = useEvents();

  return (
    <div style={{ marginBottom: 60 }}>
      {data.information.length > 0 ? (
        <>
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
        </>
      ) : (
        <S.EmptyText>행사가 없습니다.</S.EmptyText>
      )}
    </div>
  );
};

export default EventListPage;
