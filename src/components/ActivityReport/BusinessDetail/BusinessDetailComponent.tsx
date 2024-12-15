import FileButton from "@/components/common/FileButton";
import { BusinessInformation } from "@/types/ActivityReport/business";
import * as S from "@styles/ActivityReport/BusinessDetail/BusinessDetailComponentStyle";

interface BusinessDetailComponentProps {
  businessInformation: BusinessInformation;
}

const BusinessDetailComponent: React.FC<BusinessDetailComponentProps> = ({
  businessInformation,
}) => {
  return (
    <S.Container>
      <S.Text>{businessInformation.content}</S.Text>
      {businessInformation.files.map((file) => (
        <FileButton key={file.id} fileUrl={file.url} fileName={file.name} />
      ))}
    </S.Container>
  );
};

export default BusinessDetailComponent;
