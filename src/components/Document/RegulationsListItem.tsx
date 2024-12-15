import * as S from "@styles/Document/RegulationsListItemStyle";
import FilePdfIcon from "@assets/image/FilePdf.svg?react";

type Props = {
  index: number;
  title: string;
  date: string;
  fileUrl: string;
  onClick: () => void;
};

const RegulationsListItem = ({
  index,
  title,
  date,
  fileUrl,
  onClick,
}: Props) => {
  return (
    <S.ListItemContainer onClick={onClick} $isStart={index === 0}>
      <S.Title>
        {title.length > 16 ? title.slice(0, 16) + "..." : title}
      </S.Title>
      <S.RightWrap>
        <p>{date}</p>
        {fileUrl && (
          <FilePdfIcon
            onClick={(e) => {
              e.stopPropagation();
              window.open(fileUrl, "_blank");
            }}
          />
        )}
      </S.RightWrap>
    </S.ListItemContainer>
  );
};

export default RegulationsListItem;
