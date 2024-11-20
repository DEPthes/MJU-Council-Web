import * as S from "@styles/ActivityReport/PolicyList/PolicyListHeaderStyle";

const PolicyListHeader = ({ text }: { text: string }) => {
  return (
    <S.Container>
      <S.HeaderLine />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default PolicyListHeader;
