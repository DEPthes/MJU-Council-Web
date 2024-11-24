import styled from "styled-components";

import ShowBn from "../assets/image/Rectangle 34625295.svg";
import NShowBn from "../assets/image/Rectangle 34625296.svg";
import Arrow from "../assets/image/Arrow.svg";
import dummy from "../assets/banner_dummy.json";

import { useEffect, useState } from "react";

const Banner = () => {
    const [banner, setBanner] = useState<string>("");
    const [num, setNum] = useState<Number>(1);

    useEffect(() => {
        const images = dummy.map((item) => item.link);

        if (images.length > 0) {
            setBanner(images[0]);
        }

        if(images.length === 0) return;
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; 
            setBanner(images[currentIndex]); // 이미지 상태 업데이트
            setNum(currentIndex+1);
        }, 4000);  // 4초마다 변경

        // cleanup 함수로 interval 정리
        return () => {
            clearInterval(intervalId);
        };
    }, []);


    if(num==1){
        return(
            <>
                <Div>
                    <Img src={banner}></Img>     
                    <Btn>
                        <P>총학생회 소개 바로가기</P>
                        <ArrowImg src={Arrow}/>
                    </Btn>
                </Div>
                <Slide>
                    <CurrentBar src={ShowBn}/><Bar src={NShowBn} style={{transform: 'translateX(-0.7px)'}}/><Bar src={NShowBn} style={{transform: 'translateX(-1.3px)'}}/><Bar src={NShowBn}/>
                </Slide>
            </>
        );
    }else if(num==2){
        return(
            <>
                <Div>
                    <Img src={banner}></Img>
                    <Btn>
                        <P>총학생회 소개 바로가기</P>
                        <ArrowImg src={Arrow}/>
                    </Btn>
                </Div>
                <Slide>
                    <Bar src={NShowBn} style={{transform: 'translateX(-0.7px)'}}/><CurrentBar src={ShowBn} style={{transform: 'translateX(-0.7px)'}}/><Bar src={NShowBn} style={{transform: 'translateX(-1.5px)'}}/><Bar src={NShowBn}/>
                </Slide>
            </>
        );
    }else if(num==3){
        return(
            <>
                <Div>
                    <Img src={banner}></Img>
                    <Btn>
                        <P>총학생회 소개 바로가기</P>
                        <ArrowImg src={Arrow}/>
                    </Btn>
                </Div>
                <Slide>
                    <Bar src={NShowBn} style={{transform: 'translateX(-0.7px)'}}/><Bar src={NShowBn} style={{transform: 'translateX(-1.3px)'}}/><CurrentBar src={ShowBn} style={{transform: 'translateX(-1.2px)'}}/><Bar src={NShowBn}/>
                </Slide>
            </>
        );
    }else if(num==4){
        return(
            <>
                <Div>
                    <Img src={banner}></Img>
                    <Btn>
                        <P>총학생회 소개 바로가기</P>
                        <ArrowImg src={Arrow}/>
                    </Btn>
                </Div>
                <Slide>
                    <Bar src={NShowBn} style={{transform: 'translateX(-0.7px)'}}/><Bar src={NShowBn} style={{transform: 'translateX(-1.3px)'}}/><Bar src={NShowBn} style={{transform: 'translateX(-2px)'}}/><CurrentBar src={ShowBn} style={{transform: 'translateX(-2px)'}}/>
                </Slide>
            </>
        );
    }
    
    
};

export default Banner;

const Div = styled.div`
    background-color: pink;
    display: flex;
    width: 390px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0;
`;

const Img = styled.img`
    width: 390px;
    height: 390px;
    flex-shrink: 0;
`;

const Slide = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
`;
const Bar = styled.img`
    display:flex;
    flex: 1 0 0;
    height:8px;
    transform: translateX(-2px);
    margin:0;
`;

const CurrentBar = styled.img`
    display:flex;
    flex: 1 0 0;
    height:8px;

    margin:0;
`;

const Btn = styled.button`
    display:flex;
    flex-direction: row;
    justify-content:center;
    background-color: transparent;
    padding:0;
    border:0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 150px);
`;

const P = styled.p`
    display:flex;
    color: var(--M5, #F2F4F7);
    text-align: center;
    margin:0;
    /* List Title */
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`;

const ArrowImg = styled.img`
    margin: 0 0 0 4px;
`;