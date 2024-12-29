import * as S from "../../styles/Home/Component/FooterComponentStyle";

import Council_logo from "../../assets/image/Council_logo.svg";
import Footer_divider from "../../assets/image/Footer_divider.svg";
import Instagram from "../../assets/image/Instagram.svg";
import KakaoTalk from "../../assets/image/KakaoTalk.svg";
import Mail from "../../assets/image/Mail.svg";
import Phone from "../../assets/image/Phone.svg";
import { useEffect, useState } from "react";
import { getFooter } from "@/apis/home";

const Footer = () => {
  const [generation, setGeneration] = useState<number | string>(""); // 기수
  const [name, setName] = useState<string>(""); // 총학생회명
  const [email, setEmail] = useState<string>(""); // 이메일
  const [snsUrl, setSnsUrl] = useState<string>(""); // SNS URL
  const [logoUrl, setLogoUrl] = useState<string | null>(null); // 이미지 파일

  // 데이터 가져오기
  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await getFooter();
        if (data.check) {
          const { generation, name, email, snsUrl, logoUrl } = data.information;

          setGeneration(generation || ""); // 기수
          setName(name || ""); // 총학생회명
          setEmail(email || ""); // 이메일
          setSnsUrl(snsUrl || ""); // SNS URL
          setLogoUrl(logoUrl || "");

          // if (logoUrl) {
          //   // 이미지 파일 객체가 들어오면 File 형태로 설정
          //   const file = new File([logoUrl], "footer_image");
          //   setLogoUrl(file);
          //   console.log(logoUrl);
          // }
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
        alert("데이터를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchFooterData();
  }, []);

  return (
    <>
      <S.Foot>
        <S.Top>
          <S.Button href={snsUrl}>
            <img src={Instagram} alt="Instagram" />
          </S.Button>
          <S.Button href="https://pf.kakao.com/_BtYfG?fbclid=PAY2xjawG1f95leHRuA2FlbQIxMAABpoCwBfu1h_6g6gqbGlKf8X26ko8oGwQzSsTPWQOh4IaVP7EBhTRh9wg4Aw_aem_apuNHZJ5TnMzhaoFiHI46w">
            <img src={KakaoTalk} alt="KakaoTalk" />
          </S.Button>
        </S.Top>
        <S.Text style={{ font: "var(--Heading)", margin: "20px 0" }}>
          명지대학교 인문캠퍼스 제{generation}대 총학생회 {name}
        </S.Text>
        <S.CLogo src={logoUrl || Council_logo} /> {/* 이미지 표시 */}
        <S.Divider>
          <img src={Footer_divider} alt="Divider" />
        </S.Divider>
        <S.Middle>
          <S.Img>
            <img src={Phone} alt="Phone" />
          </S.Img>
          <S.Text style={{ font: "var(--Caption)", margin: "0 16px 0 0" }}>
            02-300-0901
          </S.Text>
          <S.Img>
            <img src={Mail} alt="Mail" />
          </S.Img>
          <S.Text style={{ font: "var(--Caption)", margin: "0" }}>
            {email}
          </S.Text>
        </S.Middle>
        <S.Text style={{ font: "var(--Caption)", margin: "12px 0 0 0" }}>
          서울특별시 서대문구 거북골로34 학생회관 5층 S2505 총학생회실
        </S.Text>
        <S.Text
          style={{
            font: "var(--Footer)",
            color: "var(--M50)",
            lineHeight: "20px",
            margin: "40px 0 0 0",
          }}
        >
          Copyright © 2024 MJU Student,<br></br>DEPth.All Rights Reserved
        </S.Text>
      </S.Foot>
    </>
  );
};

export default Footer;
