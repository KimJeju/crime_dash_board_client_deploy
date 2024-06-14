import { makeStyles } from "tss-react/mui";
import { Grid, Typography } from "@mui/material";
import { IArgumentType } from "../../../interfaces/IPropsModel";
import { chart_data_columns_to_array, chart_data_to_array, line_chart_data_slice } from "../../../utils/ChartDataUtil";
import { ILineChartData, IMainTransitionChartData } from "../../../interfaces/IChartModel";
import { LineChart } from "@mui/x-charts";
import { MainTransitionOnChangeBtn } from "../../global/MainTransitionOnChangeBtn";
import { crime_branch_main_transition_value } from "../../../constants/CrimeBranch";
import { MainTransitionSelector } from "../../selectors/MainTransitionSelector";
const useStyles = makeStyles()(() => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            transition: "0.2s",
            padding : "1rem",
            marginTop : "2vh",
            "&:hover": {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

            }
        },
        selector_container: {
            display : "flex",
            flexDirection : "row",
            marginTop : "1vh",

        }
    };
});

export default function MainSubjectLineChart({data} : {data : IArgumentType}) {

    const { classes } = useStyles();

    const column_list = chart_data_columns_to_array(data.args);
    const line_data_list : ILineChartData[] = [];

    Object.entries(data.args).map((el) => {
        const line_data : ILineChartData = {
            [el[0]] : chart_data_to_array(el[1] as object)
        }

        line_data_list.push(line_data);
    })

    const chart_data: IMainTransitionChartData = {
        Orrurrence: line_chart_data_slice(line_data_list, 0),
        Arrest: line_chart_data_slice(line_data_list, 1),
        Inspecttion: line_chart_data_slice(line_data_list, 2),
        PeopleArrested: line_chart_data_slice(line_data_list, 3),
        Coperation: line_chart_data_slice(line_data_list, 3),
    }

    return (
        <Grid item xs={12}  className={classes.root}>
            <Typography textAlign={"center"}>2023 범죄유형별 범죄발생 추이</Typography>
            <div className={classes.selector_container}>
            <MainTransitionSelector args={crime_branch_main_transition_value}/>
            <MainTransitionOnChangeBtn />
            </div>
            <LineChart
                width={800}
                height={450}
                series={[
                    { data: chart_data.Orrurrence, label: '발생건수', yAxisKey: 'leftAxisId' },
                    { data: chart_data.Arrest, label: '검거건수', yAxisKey: 'rightAxisId' },
                    { data: chart_data.Inspecttion, label: '발생대비 검거건수', yAxisKey: 'rightAxisId' },
                    { data: chart_data.PeopleArrested, label: '검거인원', yAxisKey: 'rightAxisId' },
                    { data: chart_data.Coperation, label: '법인체', yAxisKey: 'rightAxisId' },

                ]}
                xAxis={[{ scaleType: 'point', data: column_list }]}
                yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                rightAxis="rightAxisId"
            />
        </Grid>)
}