import { BarChart } from '@mui/x-charts/BarChart';
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { IArgumentType } from '../../../../globals/interfaces/IPropsModel';
import { IMainChartData } from '../../../../globals/interfaces/IChartModel';
import CategorySubscriptModal from '../../mobile_global/CategorySubscriptModal';
import { chart_color } from '../../../../globals/constants/GlobalConstant';
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
            marginBottom: "3px",
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


    const subscript_list = {
        "강력범죄 소계": chart_color.green,
        "지능범죄 (소계)": chart_color.blue,
        "폭력범죄 (소계)": chart_color.purple,
        "풍속범죄 (소계)": chart_color.margenta,
    }

    return (
        <Grid container className={classes.root}>
            <div style={{display : "flex", flexDirection : "column" , alignItems : "center"}}>
                <Typography>대분류 소주제별 세부 통계</Typography>
                <CategorySubscriptModal subscriptList={subscript_list} />
            </div>
            <BarChart
                xAxis={[{ scaleType: 'band', data: [''] }]}
                series={[
                    { data: ChartData.ViolentCrime },
                    { data: ChartData.CriminalMastermind },
                    { data: ChartData.ForceCrime },
                    { data: ChartData.MoralCrime },
                ]}
                height={330}
                layout="vertical"
                grid={{ vertical: true }}
                margin={{ left : 60}}
            />
        </Grid>
    )
}