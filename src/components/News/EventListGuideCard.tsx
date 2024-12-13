import * as S from "@styles/News/EventListGuideCardStyle";

type Props = {
  cover: string;
  title: string;
  date: string;
  onClick: () => void;
};

const EventListGuideCard = ({ cover, title, date, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <img src={cover} loading="lazy" />
      <h3>{title.length < 13 ? title : `${title.slice(0, 12)}...`}</h3>
      <p>{date}</p>
    </S.Container>
  );
};

export default EventListGuideCard;
