import * as S from "@styles/ActivityReport/CoalitionDetail/CoalitionDetailComponentStyle";
import { useParams } from "react-router-dom";

const CoalitionDetailComponent = () => {
  const { id } = useParams();

  const text = "aweiofja;ewfhjoajf";
  return (
    <S.Container>
      <S.ImageContainer />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

// import {"hi hello"}

export default CoalitionDetailComponent;
