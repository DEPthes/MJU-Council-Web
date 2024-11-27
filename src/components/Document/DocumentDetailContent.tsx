import { FileResponse } from "@/types/common";
import * as S from "@styles/Document/DocumentDetailContentStlye";
import FileButton from "../common/FileButton";

const DocumentDetailContent = ({
  content,
  files,
}: {
  content: string;
  files: FileResponse[];
}) => {
  return (
    <S.Container>
      <S.ContentWrap>{content}</S.ContentWrap>
      {files.length > 0 && (
        <S.FileWrap>
          {files.map((item, index) => {
            return (
              <FileButton
                key={index}
                fileUrl={item.fileUrl}
                fileName={item.fileName}
              />
            );
          })}
        </S.FileWrap>
      )}
    </S.Container>
  );
};

export default DocumentDetailContent;
