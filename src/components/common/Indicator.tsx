import { Home, Interface } from "@/assets/common";
import * as S from "@styles/common/IndicatorStyle";

interface IndicatorProps {
  urlList: string[];
}

const Indicator: React.FC<IndicatorProps> = ({ urlList }) => {
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
