import * as S from "@styles/News/NoticeDetailHeaderStyle";

const NoticeDetailHeader = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <S.Container>
      <hr />
      <h1>{title}</h1>
      <p>{date}</p>
    </S.Container>
  );
};

export default NoticeDetailHeader;
