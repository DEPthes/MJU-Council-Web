import * as S from "../../styles/Home/Component/FooterComponentStyle";

import Instagram from "../../assets/image/Instagram.svg";
import KakaoTalk from "../../assets/image/KakaoTalk.svg";
import Council_logo from "../../assets/image/Council_logo.svg";
import Footer_divider from "../../assets/image/Footer_divider.svg";
import Phone from "../../assets/image/Phone.svg";
import Mail from "../../assets/image/Mail.svg";

const Footer = () => {
    return(
        <>
            <S.Foot>
                <S.Top>
                    <S.Button> <img src={Instagram}/></S.Button>
                    <S.Button><img src={KakaoTalk}/></S.Button>
                </S.Top>
                <S.Text style={{font:'var(--Heading)', margin:"20px 0"}}>명지대학교 인문캠퍼스 제51대 총학생회</S.Text>
                <S.CLogo src={Council_logo}/>
                <S.Divider><img src={Footer_divider}/></S.Divider>
                <S.Middle>
                    <S.Img><img src={Phone}/></S.Img>
                    <S.Text style={{font:'var(--Caption)', margin:"0 16px 0 0"}}>02-300-09</S.Text>
                    <S.Img><img src={Mail}/></S.Img>
                    <S.Text style={{font:'var(--Caption)', margin:"0"}}>mjusaero@gmail.com</S.Text>
                </S.Middle>
                <S.Text style={{font:'var(--Caption)', margin:"12px 0 0 0"}}>서울특별시 서대문구 거북골로34 학생회관 5층 S2505 총학생회실</S.Text>
                <S.Text style={{font:'var(--Footer)', color: "var(--M50)", lineHeight:"20px", margin:"40px 0 0 0"}}>
                    Copyright © 2024 MJU Student,<br></br>DEPth,All Rights Reserved
                </S.Text>
            </S.Foot>
        </>
    )
};


export default Footer;