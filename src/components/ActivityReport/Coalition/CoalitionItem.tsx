import { CoalitionItemType } from "@/types/ActivityReport/Coalition";
import * as S from "@styles/ActivityReport/Coalition/CoalitionItemStyle";
import { useNavigate } from "react-router-dom";

const CoalitionItem = ({ item }: { item: CoalitionItemType }) => {
  const navigator = useNavigate();
  return (
    <S.Container
      onClick={() => navigator(`/activityReport/coalitionDetail/${item.id}`)}
    >
      <S.ImageConatiner src={item.image} />
      <S.Title>{item.title}</S.Title>
      <S.Date>{item.date}</S.Date>
    </S.Container>
  );
};

export default CoalitionItem;
