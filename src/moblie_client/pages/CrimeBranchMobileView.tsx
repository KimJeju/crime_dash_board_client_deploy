import Container from "react-bootstrap/esm/Container";
import Stack from 'react-bootstrap/Stack';
import BranchOnChangeBtn from "../../web_clinet/components/global/BranchOnChangeBtn";
import { makeStyles } from "tss-react/mui";
import { TotalBranchSelector } from "../../globals/componenets/selectors/TotalBranchSelector";
import { crime_branch_selector_value } from "../../globals/constants/CrimeBranch";
import { CrimeBranchMobileTap } from "./CrimeBranchMobileTap";
import { useRecoilState } from "recoil";
import { totalCrimebranchState } from "../../web_clinet/state/crime_branch/total/CrimeBranchState";
import { default_data_on_load, default_main_data_on_load, get_dynamic_subject_data } from "../../globals/contexts/CrimeBranchContext";
import { useMemo, useState } from "react";
import { mobileCrimeBranchTotalAvgSubjectState } from "../state/mobile_crime_branch/mobile_total/MobileTotalCrimeState";
import { FooterBar } from "../../globals/componenets/FooterBar";
import { mainDataArrestPersentState, mainDataOccurrenceState } from "../../web_clinet/state/crime_branch/main/MainDataState";
import { subDataSubjectState } from "../../web_clinet/state/crime_branch/sub/SubDataState";
import { NavBar } from "../../globals/componenets/NavBar";
import Loading from "../../globals/componenets/Loading";

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
    const [, setMobileTotalAvgData] = useRecoilState(mobileCrimeBranchTotalAvgSubjectState); // main, sub, average 

    //중분류 데이터
    const [, setMainOccurencesData] = useRecoilState(mainDataOccurrenceState); // 중분류 범죄발생추이
    const [, setMainArrestPersentData] = useRecoilState(mainDataArrestPersentState); // 중분류 검거건 추이

    //소분류 데이터
    const [, setSubDataSubject] = useRecoilState(subDataSubjectState);


    useMemo(() => {
        async function get_all_default_data() {

            try{
                //총계
                const default_data = await default_data_on_load();
                if (default_data != undefined) {
                    setTotalData({
                        average: default_data[0].average,
                        main: default_data[0].main,
                        sub: default_data[0].sub
                    })
                }
                
                //대분류
                const default_main_data = await default_main_data_on_load("2024", 1, "main")
                if (default_main_data != undefined) {
                    setMainOccurencesData(default_main_data[0])
                    setMainArrestPersentData(default_main_data[3])
                }
    
                const default_mobile_pie_data = await get_dynamic_subject_data("2024", 1,"average", "발생건수")
                if(default_mobile_pie_data != undefined){
                    setMobileTotalAvgData(default_mobile_pie_data)
                }
                //소분류
                const sub_subject = await get_dynamic_subject_data("2024", 1, "sub", "발생건수");
                setSubDataSubject(sub_subject);
    
                setLoading(false);
            } catch(error){
                console.log(error)
                return;
            }
        }
        get_all_default_data();

    }, [])

    if (loading == true) {
        return (
            <Loading />
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
                <FooterBar />
            </div>
        )
    }

}