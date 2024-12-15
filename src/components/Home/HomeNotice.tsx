import { getNotice } from "@/apis/home";
import * as S from "../../styles/Home/Component/HomeNoticeComponentStyle";
import { useEffect, useState } from "react";

import Add from "../../assets/image/Add.svg";
import Line from "../../assets/image/Line 19.svg";

interface Notice {
  noticeId: number;
  title: string;
  createdAt: string;
}

const HomeNotice = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await getNotice();
        if (response?.check && response?.information?.contents) {
          const sortedNotices = response.information.contents
            .sort(
              (a: Notice, b: Notice) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
            .slice(0, 5); // 최신 5개 가져오기
          setNotices(sortedNotices);
        } else {
          console.error("API 응답이 올바르지 않습니다.");
        }
      } catch (error) {
        console.error("공지사항을 가져오는 중 오류 발생:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <>
      <S.Div>
        <S.Top>
          <S.P>공지사항</S.P>
          <S.Img to={"/news/notice"}>
            <img src={Add} />
          </S.Img>
        </S.Top>
        <S.Bar src={Line}/>
        <S.ContentAll>
        {notices.map((notice, index) => (
            <S.Content key={notice.noticeId}>
            <S.TitleData $num={index} $isLast={index === notices.length - 1}>
                <S.ContentTitle to={`/News/notice/${notice.noticeId}`}>
                {notice.title.length < 16
                    ? notice.title
                    : `${notice.title.slice(0, 15)}...`}
                </S.ContentTitle>
                <S.ContentDate>{notice.createdAt}</S.ContentDate>
            </S.TitleData>
            </S.Content>
        ))}
        </S.ContentAll>

      </S.Div>
    </>
  );
};

export default HomeNotice;
