import GoListButton from "@/components/common/GoListButton";
import DetailContent from "@/components/News/DetailContent";
import DetailHeader from "@/components/common/DetailHeader";

const EventListGuideDetailPage = () => {
  const GuideDetail = {
    check: true,
    information: {
      eventGuideResponse: {
        guideId: 1,
        title: "행사안내001",
        content:
          "소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸이라는 걸 알 수 있었다. 그런데, 어제까지는 개울 기슭에서 하더니, 오늘은 징검다리 한가운데 앉아서 하고 있다. 소녀는 소년이 개울둑에 앉아 있는 걸 아는지 모르는지 그냥 날쌔게 물만 움켜 낸다. 소녀의 그림자가 뵈지 않는 날이 계속될수록 소년의 가슴 한 구석에는 어딘가 허전함이 자리 잡는 것이었다. 그러한 어떤 날, 소년은 전에 소녀가 앉아 물장난을 하던 징검다리 한가운데에 앉아 보았다. 개울가에 이르니, 며칠째 보이지 않던 소녀가 건너편 가에 앉아 물장난을 하고 있었다. 얼마 전에 소녀 앞에서 한 번 실수를 했을 뿐, 여태 큰길 가듯이 건너던 징검다리를 오늘은 조심스럽게 건넌다.",
        createdDate: "2024-11-17",
        images: [
          {
            imageId: 1,
            imageName: "행사안내 사진",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYeA53gwyc-vqXwjX5_v606vKjbw5nNfnpwKOzwEKm1lHj21uZkoYeBt9GsUxRcQULBM&usqp=CAU",
          },
          {
            imageId: 2,
            imageName: "행사안내 사진",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPWyAgtK6d80pJDglFyTJV7BdAjSWiNfP7g&s",
          },
        ],
        files: [
          {
            fileId: 1,
            fileName: "행사안내 파일",
            fileUrl: "https://councill-s3-bucket/aethkefjdif.pdf",
          },
          {
            fileId: 2,
            fileName: "행사안내 파일",
            fileUrl: "https://councill-s3-bucket/aethkefjdif.hwp",
          },
        ],
      },
    },
  };

  return (
    <div>
      <DetailHeader
        title={GuideDetail.information.eventGuideResponse.title}
        date={GuideDetail.information.eventGuideResponse.createdDate.replaceAll(
          "-",
          "."
        )}
      />
      <DetailContent
        images={GuideDetail.information.eventGuideResponse.images}
        content={GuideDetail.information.eventGuideResponse.content}
        files={GuideDetail.information.eventGuideResponse.files}
      />
      <GoListButton />
    </div>
  );
};

export default EventListGuideDetailPage;
