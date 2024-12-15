import { getBanner } from "@/apis/home"; // API 호출 함수 가져오기
import * as S from "../../styles/Home/Component/BannerComponentStyle";

import Arrow from "../../assets/image/Arrow.svg";
import { useEffect, useState } from "react";

interface BannerData {
  bannerId: number;
  imgUrl: string;
}

const Banner = () => {
  const [banners, setBanners] = useState<BannerData[]>([]);
  const [currentBanner, setCurrentBanner] = useState<number>(0);

  // 배너 데이터를 가져오는 로직
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await getBanner();
        if (response?.check && response?.information) {
          setBanners(response.information); // API의 banner 데이터를 상태로 저장
        } else {
          console.error("API 응답이 올바르지 않습니다.");
        }
      } catch (error) {
        console.error("배너 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchBanners();
  }, []); // 빈 의존성 배열로 최초 한 번만 실행

  // 슬라이드 효과 로직
  useEffect(() => {
    if (banners.length === 0) return; // 배너 데이터가 없을 때는 타이머 설정하지 않음

    const intervalId = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length); // 다음 배너로 이동
    }, 4000);

    return () => clearInterval(intervalId);
  }, [banners.length]); // 배너 개수가 설정된 이후에만 슬라이드 동작

  return (
    <>
      <S.Div>
        <S.ImgDiv
          $activesection={currentBanner}
          $bannerCount={banners.length}
        >
          {banners.length > 0 ? (
            <img src={banners[currentBanner].imgUrl} alt={`배너 ${currentBanner + 1}`}/>
          ) : (
            <p>배너를 불러오는 중입니다...</p>
          )}
        </S.ImgDiv>

        <S.Btn>
          <S.P to={"/introduction/introduce"}>총학생회 소개 바로가기</S.P>
          <S.ArrowImg src={Arrow} />
        </S.Btn>
      </S.Div>
    </>
  );
};

export default Banner;
