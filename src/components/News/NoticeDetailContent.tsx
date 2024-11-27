import { ImageResponse, FileResponse } from "@/types/common";
import * as S from "@styles/News/NoticeDetailContentStyle";
import FileButton from "../common/FileButton";

const NoticeDetailContent = ({
  images,
  content,
  files,
}: {
  images: ImageResponse[];
  content: string;
  files: FileResponse[];
}) => {
  return (
    <S.Container>
      <S.ImageContentWrap>
        {images.map((item, index) => {
          return <img key={index} src={item.imageUrl} />;
        })}
        {content}
      </S.ImageContentWrap>
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

export default NoticeDetailContent;
