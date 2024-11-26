import styled from "styled-components";
import NavBar from "../../components/Home/NavBar";
import Footer from "../../components/Home/Footer";
import Banner from "../../components/Home/Banner";
import HomeCategory from "../../components/Home/HomeCategory";
import HomeNotice from "../../components/Home/HomeNotice";



const Home = () => {
  return (
    <>
      <MainPage>
        <NavBar/>
        <Banner/>
        <HomeCategory/>
        <HomeNotice/>
        <Footer/>
      </MainPage>
    </>

  )
};

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin:0;
`;


export default Home;

