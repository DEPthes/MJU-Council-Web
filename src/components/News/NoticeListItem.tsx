import * as S from "@styles/News/NoticeListItemStyle";

type Props = {
  index: number;
  title: string;
  date: string;
  onClick: () => void;
};

const NoticeListItem = ({ index, title, date, onClick }: Props) => {
  return (
    <S.ListItemContainer onClick={onClick} $isStart={index === 0}>
      <S.Title>
        {title.length > 16 ? title.slice(0, 16) + "..." : title}
      </S.Title>
      <S.RightWrap>
        <p>총학생회</p>
        <p>{date}</p>
      </S.RightWrap>
    </S.ListItemContainer>
  );
};

export default NoticeListItem;
