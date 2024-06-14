import { BarChart } from '@mui/x-charts/BarChart';
import { IMainChartData } from "../../../interfaces/IChartModel";
import { chart_data_to_array, slice_total_avg_data } from "../../../utils/ChartDataUtil";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { IArgumentType } from '../../../interfaces/IPropsModel';
const useStyles = makeStyles()(() => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            transition: "0.2s",
            padding: "1vw",
            "&:hover": {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",
            }
        },
    };
});

export default function ToTalCrimeBarCharts({ data }: { data: IArgumentType }) {

    const { classes } = useStyles();

    const ChartData: IMainChartData = {
        ViolentCrime: chart_data_to_array(data.args.average["강력범죄 (소계)"]),
        CriminalMastermind: chart_data_to_array(data.args.average["지능범죄 (소계)"]),
        ForceCrime: chart_data_to_array(data.args.average["폭력범죄 (소계)"]),
        MoralCrime: chart_data_to_array(data.args.average["풍속범죄 (소계)"]),
    }

    ChartData.ViolentCrime.shift();
    ChartData.CriminalMastermind.shift();
    ChartData.ForceCrime.shift();
    ChartData.MoralCrime.shift();

    //데이터 쪼개기
    const violent_sub = slice_total_avg_data(ChartData.ViolentCrime);
    const criminal_master_mind_sub  = slice_total_avg_data(ChartData.CriminalMastermind);
    const force_crime_main_sub = slice_total_avg_data(ChartData.ForceCrime);
    const moral_crime_sub = slice_total_avg_data(ChartData.MoralCrime);

    return (
        <Grid container className={classes.root}>
            <Typography>대분류 소주제별 세부 통계</Typography>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['발생대비 검거율 (%)', "검거인원", '법인체'] }]}
                series={[
                    { data: violent_sub, label: "강력 범죄 (소계)" },
                    { data: criminal_master_mind_sub, label: '지능 범죄 (소계)' },
                    { data: force_crime_main_sub, label: '폭력 범죄 (소계)' },
                    { data: moral_crime_sub, label: '풍속 범죄 (소계)' },
                ]}
                // width={850}
                height={500}
                layout="vertical"
                grid={{ vertical: true }}
            />
        </Grid>
    )
}