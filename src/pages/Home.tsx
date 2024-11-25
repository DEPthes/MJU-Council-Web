import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import HomeCategory from "../components/HomeCategory";
import HomeNotice from "../components/HomeNotice";



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

