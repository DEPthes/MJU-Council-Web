import { TextBannerImage } from "@/assets/common";
import * as S from "@styles/Layout";
import React from "react";

interface TextBannerProps {
  urlList: string[];
}

const TextBanner: React.FC<TextBannerProps> = ({ urlList }) => {
  if (urlList.length === 0) return;
  return (
    <S.BannerContainer>
      <TextBannerImage />
      <S.Text>{urlList[urlList.length - 1]}</S.Text>
    </S.BannerContainer>
  );
};

export default TextBanner;
