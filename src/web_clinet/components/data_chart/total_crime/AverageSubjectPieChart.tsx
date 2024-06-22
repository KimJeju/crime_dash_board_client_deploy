
import { IPieChartData } from "../../../../globals/interfaces/IChartModel";
import { chart_data_columns_to_array, chart_data_to_array } from "../../../../globals/utils/ChartDataUtil";
import { PieChart, axisClasses } from "@mui/x-charts";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { IArgumentType } from "../../../../globals/interfaces/IPropsModel";
const useStyles = makeStyles()(() => {
  return {
    root: {
      display : "flex",
      alignItems : "center",
      flexDirection : "column",
      height : "25vh",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius : "1rem",
      transition : "0.2s",
      "&:hover" : {
        backgroundColor : "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

    }
    },
  };
});

export default function AverageSubjectPieChart({data} : {data : IArgumentType}) {

  const { classes } = useStyles();

  const pie_data: IPieChartData = {
    AverageSubject: chart_data_to_array(data.args)
  }

  const column_array = chart_data_columns_to_array(data.args);

  return (
      <Grid item xs={5.8}  className={classes.root}>
      <Typography>{data.key}</Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: pie_data.AverageSubject[0], label: column_array[0] },
              { id: 1, value: pie_data.AverageSubject[1], label: column_array[1] },
              { id: 2, value: pie_data.AverageSubject[2], label: column_array[2] },
              { id: 3, value: pie_data.AverageSubject[3], label: column_array[3] },
            ],
            highlightScope: { faded: 'global', highlighted: 'item' },
              },
        ]}
        slotProps={{
          legend: {
            direction: 'column',
            position: { vertical: 'middle', horizontal: 'right' },
            padding: 15,
            
            
          },
        }}
        height={200}
        sx={{
          sx: {
              [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-50px, 0)',
              },
            },
      }}      />
    </Grid>
  )
}