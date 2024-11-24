import styled from "styled-components";
import nav_logo from "../assets/image/Nav_logo.svg";
import div_bar from "../assets/image/Div_bar.svg";
import Menu_bar from "../assets/image/Menu.svg";

const NavBar = () => {
    return(
        <>
            <Nav>
                <Logo src={nav_logo}></Logo>
                <Bar src={div_bar}></Bar>
                <CouncilText>총학생회</CouncilText>
                <Menu><img src={Menu_bar}/></Menu>
            </Nav>
        </>
    )
};

export default NavBar;

const Nav = styled.div`
    width: 390px;
    height: 60px;
    display: flex;
    justify-content:center;
    align-items: center;
    top: 0;
`;

const Logo = styled.img`
    height: 35px;
    display:flex;
    align-items:center;
    margin-left: 20px
`;

const Bar = styled.img`
    margin-left:10px;
    margin-right:10px;
    display:flex;
    align-items: center;
`;

const CouncilText = styled.p`
    display:flex;
    margin-right:auto;
    color: var(--Primary, #002A68);
    /* Header Title */
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
`;

const Menu = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    padding: 0;
    background-color:transparent;
    cursor: pointer;
`;