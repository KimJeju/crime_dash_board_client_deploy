import { NavBar } from "../../globals/Componenets/NavBar";
import { makeStyles } from "tss-react/mui";
import Container from "react-bootstrap/esm/Container";
import { TotalBranchSelector } from "../../globals/Componenets/selectors/TotalBranchSelector";
import { crime_branch_selector_value } from "../../globals/constants/CrimeBranch";
import { CrimeBranchMobileTap } from "./CrimeBranchMobileTap";
const useStyles = makeStyles()(() => {
    return {
        root: {
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            height: "calc(100% - 100px)",
            padding : "3vw"
        },
    };
});

export function CrimeBranchMobileView() {
    const { classes } = useStyles()

    const link_list: Array<string> = [
        "/mobile_crime_branch",
        "/mobile_public_data_portal",
        "/mobile_crime_db_and_analsys",
    ]

    return (
        <>
            <NavBar link_list={link_list} />
            <Container className={classes.root}>
                <TotalBranchSelector args={crime_branch_selector_value}/>
                <CrimeBranchMobileTap />
            </Container>
        </>)
}