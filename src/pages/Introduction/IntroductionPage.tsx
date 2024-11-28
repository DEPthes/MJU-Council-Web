import React, { useState } from "react";
import IntroTextBanner from "@/components/Introduction/IntroTextBanner";
import IntroductionBtn from "../../components/Introduction/IntroductionBtn";
import EachPartIntroductionContent from "@/components/Introduction/EachPartIntroduction/EachPartIntroductionContent";
import OrganizationContent from "@/components/Introduction/Organization/OrganizationContent";
import TitleHead from "@/components/Introduction/TitleHead";
import Introduction from "@/components/Introduction/Introduction";
import CentralCommitee from "@/components/Introduction/CentralCommitee/CentralCommitee";

const IntroductionPage = () => {
  const [activeSection, setActiveSection] = useState<string>("소개");

  const renderContent = () => {
    switch (activeSection) {
      case "소개":
        return <Introduction />;
      case "조직도":
        return <OrganizationContent />;
      case "국별 업무 소개":
        return <EachPartIntroductionContent />;
      case "중앙운영위원회":
        return <CentralCommitee />;
      default:
        return null;
    }
  };

  return (
    <>
      <IntroTextBanner />
      <IntroductionBtn setActiveSection={setActiveSection} activeSection={activeSection} />
      <TitleHead title={activeSection} />
      {renderContent()}
    </>
  );
};

export default IntroductionPage;