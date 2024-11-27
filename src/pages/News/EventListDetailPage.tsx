import EventListDetail from "@/components/News/EventListDetail";
import EventListGuideCard from "@/components/News/EventListGuideCard";
import * as S from "@styles/News/EventListDetailPageStyle";
import { useNavigate } from "react-router-dom";

const EventListDetailPage = () => {
  const navigate = useNavigate();

  const EventList = {
    check: true,
    information: {
      eventResponse: {
        eventId: 1,
        title: "2024 축제 천진낭만 2024 축제 천진낭만 2024 축제",
        content:
          "행사 소개 내용 행사소개내용 예를 들면 축제라면 2024 인문캠퍼스 축제 천진낭만입니다! 행사 소개 내용 행사소개내용 예를 들면 축제라면 2024 인문캠퍼스 축제 천진낭만입니다행사 소개 내용 행사소개내용 예를 들면 축제라면2024 인문캠퍼스 축제 천진낭만입니다! 내용입니다.",
        startDate: "2024-11-17",
        endDate: "2024-11-18",
        images: [
          {
            imageId: 1,
            imageName: "사업 사진",
            imageUrl:
              "https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F6%2F4%2FisHFieOQTKCnVeVDLzHgHQ&w=256&q=75",
          },
          {
            imageId: 2,
            imageName: "사업 사진",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7YG64kzm7ILsXybdmLpVDXpLmtoWWfnwoZ-meXIoPE1FamSAG5m_zt6PYATX9fIqaf4&usqp=CAU",
          },
        ],
        guideList: [
          {
            guideId: 1,
            cover:
              "https://i.pinimg.com/236x/be/9f/08/be9f0882ab8e2bdbf9cf57ec5e292101.jpg",
            title: "행사 안내001행사 안내001행사 안내001행사 안내001",
            createdDate: "2024-11-18",
          },
          {
            guideId: 2,
            cover:
              "https://i.namu.wiki/i/55tpgQQ8aMMrWesFuIf1gl21HxwTWvp5pdr_zPwXt8F4ZHLg54wc0aTi7gDc_zkiFRcUpyqvx06Y9QWEqD0aQA.webp",
            title: "행사 안내002",
            createdDate: "2024-11-18",
          },
          {
            guideId: 3,
            cover:
              "https://i.pinimg.com/236x/98/bc/da/98bcda43ac914c809d1ad346efeaba1b.jpg",
            title: "행사 안내003",
            createdDate: "2024-11-18",
          },
        ],
      },
    },
  };

  return (
    <div>
      <EventListDetail
        images={EventList.information.eventResponse.images}
        title={EventList.information.eventResponse.title}
        date={
          EventList.information.eventResponse.startDate.replaceAll("-", ".") +
          " ~ " +
          EventList.information.eventResponse.endDate.replaceAll("-", ".")
        }
        content={EventList.information.eventResponse.content}
      />
      <S.GuideWrap>
        <h2>행사 안내</h2>
        <hr />
        <S.GuideItemWrap>
          {EventList.information.eventResponse.guideList.map((item, index) => {
            return (
              <EventListGuideCard
                key={index}
                cover={item.cover}
                title={item.title}
                date={item.createdDate.replaceAll("-", ".")}
                onClick={() => navigate(`/news/event/guide/${item.guideId}`)}
              />
            );
          })}
        </S.GuideItemWrap>
      </S.GuideWrap>
    </div>
  );
};

export default EventListDetailPage;
