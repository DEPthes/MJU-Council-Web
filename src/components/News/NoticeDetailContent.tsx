import { NoticeDetailFile, NoticeDetailImage } from "@/types/News/notice";
import * as S from "@styles/News/NoticeDetailContentStyle";
import FileButton from "../common/FileButton";

const NoticeDetailContent = ({
  images,
  content,
  files,
}: {
  images: NoticeDetailImage[];
  content: string;
  files: NoticeDetailFile[];
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
