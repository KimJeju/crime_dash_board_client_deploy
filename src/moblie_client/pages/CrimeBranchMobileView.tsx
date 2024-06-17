import { NavBar } from "../../globals/Componenets/NavBar";
import { makeStyles } from "tss-react/mui";
import Container from "react-bootstrap/esm/Container";
import { TotalBranchSelector } from "../../globals/Componenets/selectors/TotalBranchSelector";
import { crime_branch_selector_value } from "../../globals/constants/CrimeBranch";
import { CrimeBranchMobileTap } from "./CrimeBranchMobileTap";
import { useRecoilState } from "recoil";
import { crimeBranchTransitionState, totalCrimebranchState } from "../../web_clinet/state/crime_branch/total/CrimeBranchState";
import { dynamicSubCategoryState } from "../../web_clinet/state/crime_branch/total/DynamicSubjectState";
import { arrestAverageState, occurrencesAverageState } from "../../web_clinet/state/crime_branch/total/SubjectAverageState";
import { default_data_on_load } from "../../globals/contexts/CrimeBranchContext";
import Stack from 'react-bootstrap/Stack';
import { useMemo, useState } from "react";
import BranchOnChangeBtn from "../../web_clinet/components/global/BranchOnChangeBtn";
const useStyles = makeStyles()(() => {
    return {
        warpper: {
            display: "flex",
            flexDirection: "column",
        },
        root: {
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            height: "calc(100% - 150px)",
            padding: "3vw",
            marginBottom: "30vh"
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

    const [loading, setLoading] = useState(true);
    const [, setTotalData] = useRecoilState(totalCrimebranchState); // main, sub, average 
    // const [, setBranchTransition] = useRecoilState(crimeBranchTransitionState); // 2023 분기별 범죄 발생추이
    // const [, setSubCrimeData] = useRecoilState(dynamicSubCategoryState); // 소분류데이터
    // const [, setAvgOccurencesData] = useRecoilState(occurrencesAverageState); // 중분류 범죄발생추이
    // const [, setAvgArrestData] = useRecoilState(arrestAverageState); // 중분류 검거건 추이
    // const [subCategoryData, setSubCategoryData] = useRecoilState(dynamicSubCategoryState);

    useMemo(() => {
        async function get_all_default_data() {
            const default_data = await default_data_on_load();
            if (default_data != undefined) {
                setTotalData({
                    average: default_data[0].average,
                    main: default_data[0].main,
                    sub: default_data[0].sub
                })
                // setBranchTransition(default_data[1]);
                // setSubCrimeData(default_data[2]);
                // setAvgOccurencesData(default_data[3]);
                // setAvgArrestData(default_data[4]);
            }
            setLoading(false);
        }
        get_all_default_data();

    }, [])

    if (loading == true) {
        return (
            <></>
        )
    } else {
        return (
            <div className={classes.warpper}>
                <NavBar link_list={link_list} />
                <Container className={classes.root}>
                    <Stack gap={2}>
                        <div>
                        <TotalBranchSelector args={crime_branch_selector_value} />
                        <br />
                        <BranchOnChangeBtn />
                        </div>
                        <CrimeBranchMobileTap />
                    </Stack>
                </Container>
            </div>
        )
    }

}