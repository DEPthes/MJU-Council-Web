import * as S from "../../styles/Introduction/TitleHead";


const TitleHead:React.FC<{title:string}> = ({title}) => {
    return(
        <>
            <S.TDiv>
                <S.TP>{title}</S.TP>
            </S.TDiv>
        </>
    );
};
export default TitleHead;
