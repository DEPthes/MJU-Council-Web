import * as S from "../../styles/Home/Component/NavBarComponentStyle";
import nav_logo from "../../assets/image/Nav_logo.svg";
import div_bar from "../../assets/image/Div_bar.svg";
import Menu_bar from "../../assets/image/Menu.svg";

const NavBar = () => {
    return(
        <>
            <S.Nav>
                <S.Logo src={nav_logo}></S.Logo>
                <S.Bar src={div_bar}></S.Bar>
                <S.CouncilText>총학생회</S.CouncilText>
                <S.Menu><img src={Menu_bar}/></S.Menu>
            </S.Nav>
        </>
    )
};

export default NavBar;
