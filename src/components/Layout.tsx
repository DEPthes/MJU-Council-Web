import { parseUrlToArray } from "@/utils/parseUrlToArray";
import * as S from "@styles/Layout";
import { useLocation } from "react-router-dom";
import Footer from "./Home/Footer";
import NavBar from "./Home/NavBar";
import Indicator from "./common/Indicator";
import TextBanner from "./common/TextBanner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const urlList = parseUrlToArray(location.pathname);
  return (
    <S.Container>
      <NavBar />
      <TextBanner urlList={urlList} />
      <Indicator urlList={urlList} />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  );
};

export default Layout;
