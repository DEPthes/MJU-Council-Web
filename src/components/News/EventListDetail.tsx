import { ImageFileResponse } from "@/types/common";
import * as S from "@/styles/News/EventListDetailStyle";

type Props = {
  images: ImageFileResponse[];
  title: string;
  date: string;
  content: string;
};

const EventListDetail = ({ images, title, date, content }: Props) => {
  return (
    <S.Container>
      {images.map((item, index) => {
        return (
          <img key={index} src={item.url} alt={item.name} loading="lazy" />
        );
      })}
      <S.TextWrap>
        <h1>{title}</h1>
        <p>{date}</p>
      </S.TextWrap>
      <p>{content}</p>
    </S.Container>
  );
};

export default EventListDetail;
