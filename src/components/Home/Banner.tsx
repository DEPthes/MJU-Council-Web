import * as S from "../../styles/Home/Component/BannerComponentStyle";

import Arrow from "../../assets/image/Arrow.svg";
import Banner1 from "@assets/image/Banner1.svg?react";
import Banner2 from "@/assets/image/Banner2.svg?react";
import Banner3 from "@/assets/image/Banner3.svg?react";
import Banner4 from "@/assets/image/Banner4.svg?react";

import { useEffect, useState} from "react";

const dummy = [
    { link: <Banner1/> },
    { link: <Banner2/> },
    { link: <Banner3/> },
    { link: <Banner4/> },
  ];


const Banner = () => {
    const [banner, setBanner] = useState<JSX.Element>(dummy[0].link);
    const [num, setNum] = useState<number>(1);

    useEffect(() => {
        let currentIndex = 0;

        if (dummy.length > 0) {
            setBanner(dummy[0].link);
        }

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % dummy.length;
            setBanner(dummy[currentIndex].link);
            setNum(currentIndex + 1);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <S.Div>
                <S.ImgDiv activeSection={num - 1}>
                    {banner}
                </S.ImgDiv>
                <S.Btn>
                    <S.P to={"/introduction/introduce"}>총학생회 소개 바로가기</S.P>
                    <S.ArrowImg src={Arrow} />
                </S.Btn>
            </S.Div>
        </>
    );
};

export default Banner;
