import { useState } from "react";
import div_bar from "../../assets/image/Div_bar.svg";
import Menu_bar from "../../assets/image/Menu.svg";
import nav_logo from "../../assets/image/Nav_logo.svg";
import * as S from "../../styles/Home/Component/NavBarComponentStyle";
import SlideBar from "../../pages/SideMenuPage/SideMenu";

const NavBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <S.Div></S.Div>
      <S.Nav>
        <S.Logo src={nav_logo}></S.Logo>
        <S.Bar src={div_bar}></S.Bar>
        <S.CouncilText>총학생회</S.CouncilText>
        <S.Menu>
          <img src={Menu_bar} onClick={()=>{setOpen(!isOpen)}}/>
        </S.Menu>
      </S.Nav>
      <SlideBar isOpen={isOpen} setIsOpen={setOpen}/>
    </>
  );
};

export default NavBar;
