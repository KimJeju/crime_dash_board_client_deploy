import { Grid } from "@mui/material"
import { makeStyles } from "tss-react/mui"
import SubHorizontalBarChart from "../../../components/data_chart/sub_crime/SubHorizontalBarChart";
import { useRecoilState, useRecoilValue } from "recoil";
import { subDataSubjectState } from "../../../state/crime_branch/sub/SubDataState";
import { useMemo } from "react";
import { get_dynamic_subject_data } from "../../../contexts/CrimeBranchContext";
import { IArgumentType } from "../../../interfaces/IPropsModel";
import { SubSubjectSelector } from "../../../components/selectors/SubSubjectSelector";
import { crime_branch_sub_subject_value } from "../../../constants/CrimeBranch";
import { SubSubjectOnChangeBtn } from "../../../components/global/SubSubjectOnChangeBtn";
const useStyle = makeStyles()({
    root: {
        padding : "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius : "1rem",
        transition : "0.2s",
        "&:hover" : {
          backgroundColor : "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",
  
      }
    },

    selector_container : {
        display : "flex",
        flexDirection : "row"
    }
})

export default function SubCrimeReport() {

    const { classes } = useStyle();
    const [, setSubDataSubject] = useRecoilState(subDataSubjectState);

    useMemo(() => {
        async function get_default_sub_subject_data() {
            try {
                const result = await get_dynamic_subject_data("2024", 1, "sub", "발생건수");
                setSubDataSubject(result);
            } catch (error) {
                console.log(error);
                return;
            }
        }
        get_default_sub_subject_data();
    }, [])


    const subject_data: IArgumentType = {
        key: "소분류 분류별 통계",
        args: useRecoilValue(subDataSubjectState)
    }

    return (
        <Grid container xs={11.8} className={classes.root}>
            <Grid item xs={12}>

                <Grid item xs={12} className={classes.selector_container}>
                <SubSubjectSelector args={crime_branch_sub_subject_value} />
                <SubSubjectOnChangeBtn />
                </Grid>
                <br/>
                <SubHorizontalBarChart data={subject_data} />
            </Grid>
        </Grid>
    )
}