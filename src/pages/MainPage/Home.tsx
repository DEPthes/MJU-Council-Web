import Banner from "../../components/Home/Banner";
import HomeCategory from "../../components/Home/HomeCategory";
import HomeNotice from "../../components/Home/HomeNotice";
import * as S from "../../styles/Home/Page/HomePageStyle";

const Home = () => {
  return (
    <>
      <S.MainPage>
        {/* <NavBar/> */}
        <Banner />
        <HomeCategory />
        <HomeNotice />
        {/* <Footer/> */}
      </S.MainPage>
    </>
  );
};

export default Home;
