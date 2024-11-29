import * as S from "../../styles/Home/Component/HomeBtnComponentStyle";
import Arrow from "../assets/image/Arrow.svg";

const HomePageBtn = () => {
    return(
        <>
            <S.Btn>
                <S.P>총학생회 소개 바로가기</S.P>
                <S.Img src={Arrow}/>
            </S.Btn>
        </>
    );
};


export default HomePageBtn;