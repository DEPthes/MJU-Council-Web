import { Attachment } from "@/assets/common";
import * as S from "@styles/ActivityReport/BusinessDetail/BusinessDetailComponentStyle";

const BusinessDetailComponent = () => {
  const fileUrl = "TEST";
  const fileName = "TEST";
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    a.click();
  };

  return (
    <S.Container>
      <S.Text>
        aiejf;aiwjf;awojf;awoihf;ajksdnflakjebf;awefl;a;efa;wiuefhalwgiuaw;efiahwg;iaojfg;aldifja;liugha;dfiahdlgiuah;
      </S.Text>
      <S.FileContainer onClick={handleDownload}>
        <Attachment />
        <S.FileText>{fileName}</S.FileText>
      </S.FileContainer>
    </S.Container>
  );
};

export default BusinessDetailComponent;
