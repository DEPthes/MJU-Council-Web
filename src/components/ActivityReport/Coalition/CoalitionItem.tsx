import { AllianceContent } from "@/types/ActivityReport/coalition";
import * as S from "@styles/ActivityReport/Coalition/CoalitionItemStyle";
import { useNavigate } from "react-router-dom";

const CoalitionItem = ({ item }: { item: AllianceContent }) => {
  const navigator = useNavigate();
  const date = `${item.startDate} ~ ${item.endDate}`;
  return (
    <S.Container
      onClick={() =>
        navigator(`/activityReport/coalitionDetail/${item.allianceId}`)
      }
    >
      <S.ImageConatiner src={item.cover} />
      <S.Title>{item.title}</S.Title>
      <S.Date>{date}</S.Date>
    </S.Container>
  );
};

export default CoalitionItem;
