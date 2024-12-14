import { Image } from "@/types/ActivityReport/coalition";
import * as S from "@styles/ActivityReport/CoalitionDetail/CoalitionDetailComponentStyle";

interface CoalitionDetailComponentProps {
  text: string;
  images: Image[];
}

const CoalitionDetailComponent: React.FC<CoalitionDetailComponentProps> = ({
  text,
  images,
}) => {
  return (
    <S.Container>
      {images.map((image) => (
        <S.ImageContainer src={image.url} key={image.id} />
      ))}
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default CoalitionDetailComponent;
