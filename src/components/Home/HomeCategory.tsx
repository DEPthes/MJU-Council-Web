import * as S from "../../styles/Home/Component/HomeCategoryComponentStyle";

import Bulb from "../../assets/image/Bulb.svg";
import Comment from "../../assets/image/Comment.svg";
import Heart from "../../assets/image/Heart...S2.svg";
import Calander from "../../assets/image/Calendar_duotone_line.svg";
import Book from "../../assets/image/Book.svg";

const HomeCategory = () => {
    return(
        <>
            <S.Div>
                <S.Indiv to={"/activityReport/policyList"}>
                    <S.Img src={Bulb}/>
                    <S.CName>정책 목록</S.CName>
                </S.Indiv>
                <S.Indiv to={"/activityReport/businessList"}>
                    <S.Img src={Comment}/>
                    <S.CName>사업 목록</S.CName>
                </S.Indiv>
                <S.Indiv to={"/activityReport/coalition"}>
                    <S.Img src={Heart}/>
                    <S.CName>제휴 현황</S.CName>
                </S.Indiv>
                <S.Indiv to={"/activityReport/event"}>
                    <S.Img src={Calander}/>
                    <S.CName>행사</S.CName>
                </S.Indiv>
                <S.Indiv to={"/activityReport/minutes"}>
                    <S.Img src={Book}/>
                    <S.CName>회의록</S.CName>
                </S.Indiv>
            </S.Div>
        </>
    );
};



export default HomeCategory;
