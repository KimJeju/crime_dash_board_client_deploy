import { useRecoilState, useRecoilValue } from "recoil"
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { arrestAverageState, occurrencesAverageState } from "../../../state/crime_branch/total/SubjectAverageState";
import { dynamicSubCategoryState } from "../../../state/crime_branch/total/DynamicSubjectState";
import { useMemo, useState } from "react";
import { default_data_on_load} from "../../../contexts/CrimeBranchContext";
import { crimeBranchTransitionState, totalCrimebranchState } from "../../../state/crime_branch/total/CrimeBranchState";
import { IArgumentType } from "../../../interfaces/IPropsModel";

//components
import SingDataBox from "../../../components/SingleDataBox";
import ToTalCrimeBarCharts from "../../../components/data_chart/total_crime/ToTalCrimeBarCharts";
import AverageSubjectPieChart from "../../../components/data_chart/total_crime/AverageSubjectPieChart";
import DynamicSubjectLineChart from "../../../components/data_chart/total_crime/DynamicSubjectLineChart";
import SwarmPlotChart from "../../../components/data_chart/total_crime/SwarmPlotChart";

const useStyles = makeStyles()(() => {
    return {
        root: {
            padding: "15px",
            display: "flex",
            flexDirection: "column",
        },
        data_title: {
            fontSize: "2.2rem",
            marginBottom: "1vh"
        },
        total_avg_container: {
            display: "flex",
            justifyContent: "space-between"
        },
        chart_container: {
            display: "flex",
            flexDirection: "row",
            marginTop: "2vh",
        },
        left_chart_container: {
            display: "flex",
            justifyContent: "space-between",
        },
        right_chart_container: {
            display: "flex",
            marginLeft: "1vw",
        }
    };
});

export type BindingDataType = {
    avg_title: string;
    data: string
};

export default function TotalCrimeReport() {
    const { classes } = useStyles();

    const [, setTotalData] = useRecoilState(totalCrimebranchState); // main, sub, average 
    const [, setBranchTransition] = useRecoilState(crimeBranchTransitionState); // 2023 분기별 범죄 발생추이
    const [, setSubCrimeData] = useRecoilState(dynamicSubCategoryState); // 소분류데이터
    const [, setAvgOccurencesData] = useRecoilState(occurrencesAverageState); // 중분류 범죄발생추이
    const [, setAvgArrestData] = useRecoilState(arrestAverageState); // 중분류 검거건 추이
    // const [subCategoryData, setSubCategoryData] = useRecoilState(dynamicSubCategoryState);

    const [loading, setLoading] = useState(true);

    useMemo(() => {
        async function get_all_default_data() {
            const default_data = await default_data_on_load();
            if (default_data != undefined) {
                setTotalData({
                    average: default_data[0].average,
                    main: default_data[0].main,
                    sub: default_data[0].sub
                })
                setBranchTransition(default_data[1]);
                setSubCrimeData(default_data[2]);
                setAvgOccurencesData(default_data[3]);
                setAvgArrestData(default_data[4]);
            }
            setLoading(false);
        }
        get_all_default_data();
    }, [])

    //즉각적인 데이터 변동이 어려운 차트에 대하여 값을 직접 대입해준다.
    const total_data_args : IArgumentType = {
        key : "종합 총계",
        args : useRecoilValue(totalCrimebranchState)
    }

    const sub_catetory_args : IArgumentType = {
        key : "소분류 범죄 발생비율 (%)",
        args : useRecoilValue(dynamicSubCategoryState)
    }

    const occucrrences_args : IArgumentType = {
        key : "대분류 범죄 발생건수 (건)",
        args : useRecoilValue(occurrencesAverageState)
    } 

    const arrest_args : IArgumentType = {
        key : "대분류 범죄 검거건수 (건)",
        args : useRecoilValue(arrestAverageState)
    } 


    if (loading == true) {
        return <></>
    } else {
        return (
            <Grid container xs={12} spacing={2} className={classes.root} >
                <Typography className={classes.data_title}></Typography>
                <Grid container spacing={2} className={classes.total_avg_container}>
                    {
                        Object.entries(total_data_args.args.average["총 계"]).map((el, index) => (
                            <SingDataBox key={index} data={el[1] as string} avg_title={el[0]} />
                        ))
                    }
                </Grid>

                <Grid item xs={12} className={classes.chart_container}>
                    <Grid container className={classes.left_chart_container}>
                        <AverageSubjectPieChart data={occucrrences_args}/>
                        <AverageSubjectPieChart data={arrest_args}/>
                        <ToTalCrimeBarCharts data={total_data_args} />
                    </Grid>
                    <Grid container className={classes.right_chart_container}>
                        <SwarmPlotChart  data={sub_catetory_args}/>
                        <DynamicSubjectLineChart />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


