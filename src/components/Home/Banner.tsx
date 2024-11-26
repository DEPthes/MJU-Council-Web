import * as S from "../../styles/Home/Component/BannerComponentStyle";

import ShowBn from "../../assets/image/Rectangle 34625295.png";
import NShowBn from "../../assets/image/Rectangle 34625296.png";
import Arrow from "../../assets/image/Arrow.svg";
import dummy from "../../assets/banner_dummy.json";

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
                <S.Div>
                    <S.Img src={banner}></S.Img>     
                    <S.Btn>
                        <S.P>총학생회 소개 바로가기</S.P>
                        <S.ArrowImg src={Arrow}/>
                    </S.Btn>
                </S.Div>
                <S.Slide>
                    <S.CurrentBar src={ShowBn}/><S.Bar src={NShowBn}/><S.Bar src={NShowBn}/><S.Bar src={NShowBn}/>
                </S.Slide>
            </>
        );
    }else if(num==2){
        return(
            <>
                <S.Div>
                    <S.Img src={banner}></S.Img>
                    <S.Btn>
                        <S.P>총학생회 소개 바로가기</S.P>
                        <S.ArrowImg src={Arrow}/>
                    </S.Btn>
                </S.Div>
                <S.Slide>
                    <S.Bar src={NShowBn} /><S.CurrentBar src={ShowBn}/><S.Bar src={NShowBn} /><S.Bar src={NShowBn}/>
                </S.Slide>
            </>
        );
    }else if(num==3){
        return(
            <>
                <S.Div>
                    <S.Img src={banner}></S.Img>
                    <S.Btn>
                        <S.P>총학생회 소개 바로가기</S.P>
                        <S.ArrowImg src={Arrow}/>
                    </S.Btn>
                </S.Div>
                <S.Slide>
                    <S.Bar src={NShowBn}/><S.Bar src={NShowBn}/><S.CurrentBar src={ShowBn} /><S.Bar src={NShowBn}/>
                </S.Slide>
            </>
        );
    }else if(num==4){
        return(
            <>
                <S.Div>
                    <S.Img src={banner}></S.Img>
                    <S.Btn>
                        <S.P>총학생회 소개 바로가기</S.P>
                        <S.ArrowImg src={Arrow}/>
                    </S.Btn>
                </S.Div>
                <S.Slide>
                    <S.Bar src={NShowBn} /><S.Bar src={NShowBn} /><S.Bar src={NShowBn} /><S.CurrentBar src={ShowBn} />
                </S.Slide>
            </>
        );
    }
    
    
};

export default Banner;

