import * as S from "@styles/Layout";
import Footer from "./Home/Footer";
import NavBar from "./Home/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Container>
      <NavBar />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  );
};

export default Layout;
