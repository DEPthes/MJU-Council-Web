import * as S from "@styles/common/GoListButtonStyle";
import { useNavigate } from "react-router-dom";

const GoListButton = () => {
  const navigate = useNavigate();

  return (
    <S.ButtonContainer onClick={() => navigate(-1)}>
      <S.GoListButton>목록으로</S.GoListButton>
    </S.ButtonContainer>
  );
};

export default GoListButton;
