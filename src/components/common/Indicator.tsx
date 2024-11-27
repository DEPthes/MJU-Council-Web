import { Home, Interface } from "@/assets/common";
import { parseUrlToArray } from "@/utils/parseUrlToArray";
import * as S from "@styles/common/IndicatorStyle";
import { useLocation } from "react-router-dom";

const Indicator = () => {
  const location = useLocation();

  const urlList = parseUrlToArray(location.pathname);
  //홈 화면에서는 띄우지 않기
  if (urlList.length == 0) return;
  return (
    <S.Container>
      <Home />
      {urlList.map((url, index) => (
        <S.UrlContainer key={index}>
          <Interface />
          <S.Text>{url}</S.Text>
        </S.UrlContainer>
      ))}
    </S.Container>
  );
};

export default Indicator;
