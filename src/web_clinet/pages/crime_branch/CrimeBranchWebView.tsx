import styled from "styled-components";

//components
import CrimeBranchTap from "./CrimeBranchTap";
import SideNav from "../../components/global/SideNav";
import BranchOnChangeBtn from "../../components/global/BranchOnChangeBtn";
import { TotalBranchSelector } from "../../components/selectors/TotalBranchSelector";
import { crime_branch_selector_value } from "../../../globals/constants/CrimeBranch";


const Container = styled.div`
    width : calc(100% - 5vw);
    height : 100vh;
    margin : 5%;
`

const SelectorContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    
    width : calc(25%);
`


export default function CrimeBranchWebView() {
    return (
        <>
            <Container>
                <SideNav />
                <SelectorContainer>
                    <TotalBranchSelector args={crime_branch_selector_value} />
                    <BranchOnChangeBtn/>
                </SelectorContainer>
                <CrimeBranchTap />
            </Container>
        </>
    )
}


