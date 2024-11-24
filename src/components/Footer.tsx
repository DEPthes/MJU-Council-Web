import styled from "styled-components";

import Instagram from "../assets/image/Instagram.svg";
import KakaoTalk from "../assets/image/KakaoTalk.svg";
import Council_logo from "../assets/image/Council_logo.svg";
import Footer_divider from "../assets/image/Footer_divider.svg";
import Phone from "../assets/image/Phone.svg";
import Mail from "../assets/image/Mail.svg";

const Footer = () => {
    return(
        <>
            <Foot>
                <Top>
                    <Button> <img src={Instagram}/></Button>
                    <Button><img src={KakaoTalk}/></Button>
                </Top>
                <Text style={{fontSize:"16px", margin:"20px 0"}}>명지대학교 인문캠퍼스 제51대 총학생회</Text>
                <CLogo src={Council_logo}/>
                <Divider><img src={Footer_divider}/></Divider>
                <Middle>
                    <Img><img src={Phone}/></Img>
                    <Text style={{fontSize:"12px", margin:"0 16px 0 0"}}>02-300-09</Text>
                    <Img><img src={Mail}/></Img>
                    <Text style={{fontSize:"12px", margin:"0"}}>mjusaero@gmail.com</Text>
                </Middle>
                <Text style={{fontSize:"12px", margin:"12px 0 0 0"}}>서울특별시 서대문구 거북골로34 학생회관 5층 S2505 총학생회실</Text>
                <Text style={{fontSize:"12px", color: "var(--M50, #8094B3)", lineHeight:"20px", margin:"40px 0 0 0"}}>
                    Copyright © 2024 MJU Student,<br></br>DEPth,All Rights Reserved
                </Text>
            </Foot>
        </>
    )
};

const Foot = styled.div`
    background: var(--Primary, #002A68);
    display: flex;
    width: 390px;
    padding: 60px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Top = styled.div`
    display:flex;
    flex-direction: row;
`;

const Button = styled.button`
    display:flex;
    padding:4px;
    margin: 0 6px;
    border-radius: 4px;
`;

const Text = styled.p`
    color: var(--White, #FFF);
    text-align: center;
    /* Heading */
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

const CLogo = styled.img`
    display:flex;
    height:28px;
`;

const Divider = styled.div`
    display: flex;
    margin: 40px 0;
    width: 350px;
`;

const Middle = styled.div`
    display:flex;
    flex-direction: row;
    margin:0;
`;

const Img = styled.div`
    display: flex;
    width: 16px;
    height: 16px;
    margin-right: 6px;
`;

export default Footer;