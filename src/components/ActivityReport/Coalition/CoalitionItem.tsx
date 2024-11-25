import { CoalitionItemType } from "@/types/ActivityReport/Coalition";
import * as S from "@styles/ActivityReport/Coalition/CoalitionItemStyle";

const CoalitionItem = ({ item }: { item: CoalitionItemType }) => {
  return (
    <S.Container>
      <S.ImageConatiner src={item.image} />
      <S.Title>{item.title}</S.Title>
      <S.Date>{item.date}</S.Date>
    </S.Container>
  );
};

export default CoalitionItem;
