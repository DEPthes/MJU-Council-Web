import * as S from "../../styles/Home/Component/HomeNoticeComponentStyle";
import { useEffect, useState } from "react";

import Add from "../../assets/image/Add.svg";
import Line from "../../assets/image/Line 19.svg";
import dummyData from "../../assets/home_dummy.json";

interface Notice{
    title: string;
    date: string;
}

const HomeNotice = () => {
    const [notices, setNotices] = useState<Notice[]>([]);

    useEffect(() => {
            const sortedNotices = dummyData
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5);
          setNotices(sortedNotices);
      }, []);

    return(
        <>
            <S.Div>
                <S.Top>
                    <S.P>공지사항</S.P>
                    <S.Img to={"/news/notice"}><img src={Add}/></S.Img>
                </S.Top>
                <S.Bar src={Line}/>
                <S.ContentAll>
                    {notices.map((notice, index) => (
                    <S.Content key={index}>
                        <S.TitleData $num={index}>
                            <S.ContentTitle to={"/News/notice/:id"}>{notice.title.length<16 ? notice.title : `${notice.title.slice(0, 15)}...`}</S.ContentTitle>
                            <S.ContentDate>{notice.date}</S.ContentDate>
                        </S.TitleData >
                    </S.Content>
                    ))}
                </S.ContentAll>
                
            </S.Div>
        </>
    );
};

export default HomeNotice;

