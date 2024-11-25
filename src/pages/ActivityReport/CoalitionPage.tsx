import CoalitionItem from "@/components/ActivityReport/Coalition/CoalitionItem";
import PageComponent from "@/components/common/PageComponent";
import * as S from "@styles/ActivityReport/Coalition/CoalitionPageStyle";

const CoalitionPage = () => {
  const data = [
    {
      id: 0,
      image: "~url",
      title: "1제휴 뭐시기 제휴 뭐시기",
      date: "2024.11.11 ~ 2024.11.11",
    },
    {
      id: 1,
      image: "~url",
      title: "2제휴 뭐시기 제휴 뭐시기",
      date: "2024.11.11 ~ 2024.11.11",
    },
    {
      id: 2,
      image: "~url",
      title: "3제휴 뭐시기 제휴 뭐시기",
      date: "2024.11.11 ~ 2024.11.11",
    },
    {
      id: 3,
      image: "~url",
      title: "4제휴 뭐시기 제휴 뭐시기",
      date: "2024.11.11 ~ 2024.11.11",
    },
    {
      id: 4,
      image: "~url",
      title: "5제휴 뭐시기 제휴 뭐시기",
      date: "2024.11.11 ~ 2024.11.11",
    },
  ];
  return (
    <S.Container>
      <S.ItemContainer>
        {data.slice(0, 8).map((item) => (
          <CoalitionItem key={item.id} item={item} />
        ))}
      </S.ItemContainer>

      <PageComponent />
    </S.Container>
  );
};

export default CoalitionPage;
