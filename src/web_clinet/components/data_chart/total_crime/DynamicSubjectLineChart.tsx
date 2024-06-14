import { useRecoilValue } from "recoil"
import { makeStyles } from "tss-react/mui";
import { Grid, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { crimeBranchTransitionState } from "../../../state/crime_branch/total/CrimeBranchState";
import { chart_data_columns_to_array, chart_data_to_array, line_chart_data_slice } from "../../../utils/ChartDataUtil";
import { ILineChartData, IMainChartData } from "../../../interfaces/IChartModel";


const useStyles = makeStyles()(() => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            transition: "0.2s",
            "&:hover": {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

            }
        },
    };
});

export default function DynamicSubjectLineChart() {

    const { classes } = useStyles();
    const data = useRecoilValue(crimeBranchTransitionState);
    const using_subject = data as any

    const column_list = chart_data_columns_to_array(using_subject);
    const line_data_list: ILineChartData[] = [];

    Object.entries(data).map((el) => {
        const line_data: ILineChartData = {
            [el[0]]: chart_data_to_array(el[1])
        }
        line_data_list.push(line_data);
    })

    const chart_data: IMainChartData = {
        ViolentCrime: line_chart_data_slice(line_data_list, 0),
        ForceCrime: line_chart_data_slice(line_data_list, 1),
        CriminalMastermind: line_chart_data_slice(line_data_list, 2),
        MoralCrime: line_chart_data_slice(line_data_list, 3),
    }

    return (
        <Grid xs={16} className={classes.root}>
            <Typography>2023 총계 범죄발생 추이</Typography>
            <LineChart
                width={800}
                height={500}
                series={[
                    { data: chart_data.ViolentCrime, label: '강력범죄', yAxisKey: 'leftAxisId' },
                    { data: chart_data.ForceCrime, label: '폭력범죄', yAxisKey: 'rightAxisId' },
                    { data: chart_data.CriminalMastermind, label: '지능범죄', yAxisKey: 'rightAxisId' },
                    { data: chart_data.MoralCrime, label: '풍속범죄', yAxisKey: 'rightAxisId' },

                ]}
                xAxis={[{ scaleType: 'point', data: column_list }]}
                yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                rightAxis="rightAxisId"
            />
        </Grid>)
}