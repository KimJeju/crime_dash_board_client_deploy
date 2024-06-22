import { BarChart } from '@mui/x-charts/BarChart';
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { IArgumentType } from '../../../globals/interfaces/IPropsModel';
import { IMainChartData } from '../../../globals/interfaces/IChartModel';
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
            marginBottom : "3px",
            "&:hover": {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",
            }
        },
    };
});

export default function MobileToTalCrimeBarCharts({ data }: { data: IArgumentType }) {

    const { classes } = useStyles();

    const ChartData: IMainChartData = {
        ViolentCrime: [],
        CriminalMastermind: [],
        ForceCrime: [],
        MoralCrime: [],
    }

    ChartData.ViolentCrime.push(data.args["강력범죄 (소계)"]);
    ChartData.CriminalMastermind.push(data.args["지능범죄 (소계)"]);
    ChartData.ForceCrime.push(data.args["폭력범죄 (소계)"]);
    ChartData.MoralCrime.push(data.args["풍속범죄 (소계)"]);

    return (
        <Grid container className={classes.root}>
            <Typography>대분류 소주제별 세부 통계</Typography>
            <BarChart
                xAxis={[{ scaleType: 'band', data: [''] }]}
                series={[
                    { data: ChartData.ViolentCrime, label: "강력 범죄 (소계)" },
                    { data: ChartData.CriminalMastermind, label: '지능 범죄 (소계)' },
                    { data: ChartData.ForceCrime, label: '폭력 범죄 (소계)' },
                    { data: ChartData.MoralCrime, label: '풍속 범죄 (소계)' },
                ]}
                // width={850}
                height={380}
                layout="vertical"
                grid={{ vertical: true }}
            />
        </Grid>
    )
}