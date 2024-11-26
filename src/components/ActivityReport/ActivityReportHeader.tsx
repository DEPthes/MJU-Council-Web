import * as S from "@styles/ActivityReport/ActivityReportHeaderStyle";

interface ActivityReportHeaderProps {
  text: string;
  subText?: string;
}

const ActivityReportHeader: React.FC<ActivityReportHeaderProps> = ({
  text,
  subText,
}) => {
  return (
    <S.Container>
      <S.HeaderLine />
      <S.Text>{text}</S.Text>
      <S.DateText>{subText}</S.DateText>
    </S.Container>
  );
};

export default ActivityReportHeader;
