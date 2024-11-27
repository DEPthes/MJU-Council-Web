import * as S from "@styles/News/EventListCardStyle";
import EventArrowIcon from "@assets/image/EventArrow.svg?react";

type Props = {
  cover: string;
  title: string;
  date: string;
  onClick: () => void;
};

const EventListCard = ({ cover, title, date, onClick }: Props) => {
  return (
    <S.Container>
      <img src={cover} />
      <S.TextWrap onClick={onClick}>
        <S.TitleWrap>
          <h1>{title.length < 13 ? title : `${title.slice(0, 12)}...`}</h1>
          <EventArrowIcon />
        </S.TitleWrap>
        <p>{date}</p>
      </S.TextWrap>
    </S.Container>
  );
};

export default EventListCard;
