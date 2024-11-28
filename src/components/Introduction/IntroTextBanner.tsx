import * as S from "../../styles/Introduction/IntroTextBanner";

import TextBanner from "../../assets/common/TextBanner.svg";
import Home from "../../assets/common/Home.svg";
import Arrow from "../../assets/image/Interface.svg";

const IntroTextBanner = () => {
    return(
        <>
            <S.BannerDiv>
                <S.Img src={TextBanner}/>
                <S.P>총학생회</S.P>
            </S.BannerDiv>
            <S.ITDiv>
                <S.DivImg src={Home}/>
                <S.DivImg src={Arrow}/>
                <S.Text>총학생회</S.Text>
            </S.ITDiv>
        </>
    );
};

export default IntroTextBanner;
