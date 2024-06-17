
import { PieChart } from "@mui/x-charts";
import { Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { IArgumentType } from "../../../globals/interfaces/IPropsModel";
import { IPieChartData } from "../../../globals/interfaces/IChartModel";
import { chart_data_columns_to_array, chart_data_to_array } from "../../../globals/utils/ChartDataUtil";
const useStyles = makeStyles()(() => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      height: "35vh",
      borderRadius: "1rem",
      transition: "0.2s",
      boxShadow: "rgba(0, 0, 0, 0.24) 1px 3px 8px",
      "&:hover": {
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

      }
    },
    coloum_box: {
      display: "flex",
      flexDirection: "row",
      fontSize: "0.8rem"
    },
    title: {
      display: "flex",
      flexDirection: "row"
    }
  };
});

export default function MobileTotalAverageSubjectPieChart({ data }: { data: IArgumentType }) {

  const { classes } = useStyles();

  const pie_data: IPieChartData = {
    AverageSubject: chart_data_to_array(data.args)
  }

  const column_array = chart_data_columns_to_array(data.args);

  return (
    <div className={classes.root}>
      <Typography>{data.key}</Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: pie_data.AverageSubject[0], },
              { id: 1, value: pie_data.AverageSubject[1], },
              { id: 2, value: pie_data.AverageSubject[2], },
              { id: 3, value: pie_data.AverageSubject[3], },
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
        width={550}
        height={300}
      />
      <div className={classes.coloum_box}>
        <p className={classes.title}><div style={{ backgroundColor: "#05B1AF", width: "20px", height: "20px", marginRight: "2px" }} />{column_array[0]}</p> &nbsp;
        <p className={classes.title}><div style={{ backgroundColor: "#2D96FE", width: "20px", height: "20px", marginRight: "2px" }} />{column_array[1]}</p>  &nbsp;
        <p className={classes.title}><div style={{ backgroundColor: "#B800D7", width: "20px", height: "20px", marginRight: "2px" }} />{column_array[2]}</p>  &nbsp;
        <p className={classes.title}><div style={{ backgroundColor: "#5F019B", width: "20px", height: "20px", marginRight: "2px" }} />{column_array[3]}</p>  
      </div>
    </div>
  )
}