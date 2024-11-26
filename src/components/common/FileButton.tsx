import { Attachment } from "@/assets/common";
import * as S from "@styles/common/FileButtonStyle";

interface FileButtonProps {
  fileUrl: string;
  fileName: string;
}

const FileButton: React.FC<FileButtonProps> = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    a.click();
  };
  return (
    <S.FileContainer onClick={handleDownload}>
      <Attachment />
      <S.FileText>{fileName}</S.FileText>
    </S.FileContainer>
  );
};

export default FileButton;
