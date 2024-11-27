import EventListCard from "@/components/News/EventListCard";
import { useNavigate } from "react-router-dom";

const EventListPage = () => {
  const navigate = useNavigate();

  const EventList = {
    check: true,
    information: {
      eventList: [
        {
          eventId: 3,
          cover:
            "https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F6%2F4%2FisHFieOQTKCnVeVDLzHgHQ&w=256&q=75",
          title: "행사행사행사행사행사행사행사행사행사",
          startDate: "2024-11-17",
          endDate: "2024-11-30",
        },
        {
          eventId: 2,
          cover:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7YG64kzm7ILsXybdmLpVDXpLmtoWWfnwoZ-meXIoPE1FamSAG5m_zt6PYATX9fIqaf4&usqp=CAU",
          title: "행사001",
          startDate: "2024-11-10",
          endDate: "2024-11-12",
        },
        {
          eventId: 1,
          cover:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FHvL5pZg5czJbZR1vPKte4jkh2v6XOrGU_QGdBEBqm8P1ExPRq5tmfbesciZ-ioSIGk&usqp=CAU",
          title: "행사001",
          startDate: "2024-10-17",
          endDate: "2024-11-01",
        },
      ],
    },
  };

  return (
    <div style={{ marginBottom: 60 }}>
      {EventList.information.eventList.map((item, index) => {
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
  );
};

export default EventListPage;
