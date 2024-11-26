import * as S from "../../styles/Home/Page/HomePageStyle";
import NavBar from "../../components/Home/NavBar";
import Footer from "../../components/Home/Footer";
import Banner from "../../components/Home/Banner";
import HomeCategory from "../../components/Home/HomeCategory";
import HomeNotice from "../../components/Home/HomeNotice";



const Home = () => {
  return (
    <>
      <S.MainPage>
        <NavBar/>
        <Banner/>
        <HomeCategory/>
        <HomeNotice/>
        <Footer/>
      </S.MainPage>
    </>

  )
};

export default Home;

