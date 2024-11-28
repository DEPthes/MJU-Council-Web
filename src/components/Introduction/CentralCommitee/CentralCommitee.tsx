import TitleHead from "../TitleHead";
import CentralCommiteeContent from "./CentralCommiteeContent";
import StudentOrganization from "./StudentOrganization";


const CentralCommitee = () => {

    return(
        <>
        <CentralCommiteeContent/>
        <TitleHead title="구성_학생자치기구"/>
        <StudentOrganization />
        </>
    );
};

export default CentralCommitee;