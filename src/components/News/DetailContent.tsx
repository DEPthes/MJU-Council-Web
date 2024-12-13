import { ImageFileResponse } from "@/types/common";
import * as S from "@styles/News/DetailContentStyle";
import FileButton from "../common/FileButton";

const DetailContent = ({
  images,
  content,
  files,
}: {
  images: ImageFileResponse[];
  content: string;
  files: ImageFileResponse[];
}) => {
  return (
    <S.Container>
      <S.ImageContentWrap>
        {images.map((item, index) => {
          return <img key={index} src={item.url} loading="lazy" />;
        })}
        {content}
      </S.ImageContentWrap>
      {files.length > 0 && (
        <S.FileWrap>
          {files.map((item, index) => {
            return (
              <FileButton key={index} fileUrl={item.url} fileName={item.name} />
            );
          })}
        </S.FileWrap>
      )}
    </S.Container>
  );
};

export default DetailContent;
