import FileButton from "@/components/common/FileButton";
import * as S from "@styles/ActivityReport/BusinessDetail/BusinessDetailComponentStyle";

const BusinessDetailComponent = () => {
  const fileUrl = "TEST";
  const fileName = "TEST";

  return (
    <S.Container>
      <S.Text>
        aiejf;aiwjf;awojf;awoihf;ajksdnflakjebf;awefl;a;efa;wiuefhalwgiuaw;efiahwg;iaojfg;aldifja;liugha;dfiahdlgiuah;
      </S.Text>
      <FileButton fileUrl={fileUrl} fileName={fileName} />
    </S.Container>
  );
};

export default BusinessDetailComponent;
