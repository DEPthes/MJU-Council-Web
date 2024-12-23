import React, { useEffect, useState } from "react";
import * as S from "../../styles/SideMenu/SideMenuComponentStyle";

import ArrowDown from "../../assets/image/ArrowDown.svg";
import ArrowUp from "../../assets/image/ArrowUp.svg";

const SideBar: React.FC<{ isOpen: boolean, setIsOpen: (open: boolean) => void}> = ({isOpen, setIsOpen}) => {
  const [openCouncil, setOpenCouncil] = useState<boolean>(false);
  const [openNews, setOpenNews] = useState<boolean>(false);
  const [openData, setOpenData] = useState<boolean>(false);
  const [openActivity, setOpenActivity] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setOpenActivity(false);
      setOpenData(false);
      setOpenNews(false);
      setOpenCouncil(false);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeSidebar = () => {
    setIsOpen(false); // 메뉴 닫기
  };

  return (
    <>
      <S.SideDiv>
        <S.OverLay $isopen={isOpen?"true":"false"}>
          <S.Container $isopen={isOpen?"true":"false"}>
            <S.MenuItem onClick={() => setOpenCouncil(!openCouncil)} $eachmenuopen={openCouncil?"true":"false"}>
              총학생회
              <S.ArrowImg src={openCouncil? ArrowUp : ArrowDown}/>
            </S.MenuItem>
            <S.SubMenu $isvisible={openCouncil?"true":"false"}>
              <S.Div to='/introduction/introduce' onClick={closeSidebar}>소개</S.Div>
              <S.Div to='/introduction/organization'  onClick={closeSidebar}>조직도</S.Div>
              <S.Div to='/introduction/eachpart'  onClick={closeSidebar}>국별 업무 소개</S.Div>
              <S.Div to='/introduction/centralcommitee'  onClick={closeSidebar}>중앙운영위원회</S.Div>
            </S.SubMenu>
            <S.MenuItem onClick={() => setOpenNews(!openNews)} $eachmenuopen={openNews?"true":"false"}>
              소식
              <S.ArrowImg src={openNews? ArrowUp : ArrowDown}/>
            </S.MenuItem>
            <S.SubMenu $isvisible={openNews?"true":"false"}>
              <S.Div to='/news/notice' onClick={closeSidebar}>공지사항</S.Div>
              <S.Div to='/news/event' onClick={closeSidebar}>행사</S.Div>
            </S.SubMenu>
            <S.MenuItem onClick={() => setOpenActivity(!openActivity)} $eachmenuopen={openActivity?"true":"false"}>
              활동보고
              <S.ArrowImg src={openActivity? ArrowUp : ArrowDown}/>
            </S.MenuItem>
            <S.SubMenu $isvisible={openActivity?"true":"false"}>
              <S.Div to='/activityReport/policyList'  onClick={closeSidebar}>정책 목록</S.Div>
              <S.Div to='/activityReport/businessList'  onClick={closeSidebar}>사업 목록</S.Div>
              <S.Div to='/activityReport/coalition'  onClick={closeSidebar}>제휴 현황</S.Div>
            </S.SubMenu>
            <S.MenuItem onClick={() => setOpenData(!openData)} $eachmenuopen={openData?"true":"false"}>
              자료집
              <S.ArrowImg src={openData? ArrowUp : ArrowDown}/>
            </S.MenuItem>
            <S.SubMenu $isvisible={openData?"true":"false"}>
              <S.Div to='/document/minutes'  onClick={closeSidebar}>회의록</S.Div>
              <S.Div to='/document/regulations'  onClick={closeSidebar}>회칙 및 세칙</S.Div>
            </S.SubMenu>
          </S.Container>
        </S.OverLay>
      </S.SideDiv>
    </>
  );
};

export default SideBar;
