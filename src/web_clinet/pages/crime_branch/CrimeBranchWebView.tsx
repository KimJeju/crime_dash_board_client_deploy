import styled from "styled-components";

//components
import CrimeBranchTap from "./CrimeBranchTap";
import BranchOnChangeBtn from "../../Components/global/BranchOnChangeBtn";
import { TotalBranchSelector } from "../../../globals/Componenets/selectors/TotalBranchSelector";
import { crime_branch_selector_value } from "../../../globals/constants/CrimeBranch";
import { NavBar } from "../../../globals/Componenets/NavBar";
import { FooterBar } from "../../../globals/Componenets/FooterBar";



const Container = styled.div`
    padding : 3%;
`

const SelectorContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    
    width : calc(25%);
`


export default function CrimeBranchWebView() {

    const link_list : Array<string> = [
        "/web_crime_branch",
        "/web_public_data_portal",
        "/web_crime_db_and_analsys",
    ]

    return (
        <>
            <NavBar link_list={link_list} />
            <Container>
                <SelectorContainer>
                    <TotalBranchSelector args={crime_branch_selector_value} />
                    <BranchOnChangeBtn />
                </SelectorContainer>
                <CrimeBranchTap />
            </Container>
            <FooterBar />
        </>
    )
}


