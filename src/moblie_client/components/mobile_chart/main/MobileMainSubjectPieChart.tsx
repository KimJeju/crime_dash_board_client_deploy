
import { IPieChartData } from "../../../../globals/interfaces/IChartModel";
import { chart_data_to_array } from "../../../../globals/utils/ChartDataUtil";
import { PieChart } from "@mui/x-charts";
import { Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { IArgumentType } from "../../../../globals/interfaces/IPropsModel";
import { main_subscript_list } from "../../../../globals/constants/GlobalConstant";
import CategorySubscriptModal from "../../mobile_global/CategorySubscriptModal";
const useStyles = makeStyles()(() => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      height: "25vh",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius: "1rem",
      transition: "0.2s",
      // paddingRight : "50px",
      "&:hover": {
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

      }
    },
  };
});

const sizing = {
  margin: { right: 20 },
  width: 300,
  height: 300,
  legend: { hidden: true },
};

export default function MobileMainSubjectPieChart({ data }: { data: IArgumentType }) {

  const { classes } = useStyles();

  const pie_data: IPieChartData = {
    AverageSubject: chart_data_to_array(data.args)
  }



  return (
    <div className={classes.root}>
      <Typography>{data.key}</Typography>
      <CategorySubscriptModal subscriptList={main_subscript_list} />
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: pie_data.AverageSubject[0], },
              { id: 1, value: pie_data.AverageSubject[1], },
              { id: 2, value: pie_data.AverageSubject[2], },
              { id: 3, value: pie_data.AverageSubject[3], },
              { id: 4, value: pie_data.AverageSubject[4], },
              { id: 5, value: pie_data.AverageSubject[5], },
              { id: 6, value: pie_data.AverageSubject[6], },
              { id: 7, value: pie_data.AverageSubject[7], },
              { id: 8, value: pie_data.AverageSubject[8], },
              { id: 9, value: pie_data.AverageSubject[9], },
              { id: 10, value: pie_data.AverageSubject[10], },

            ],
            highlightScope: { faded: 'global', highlighted: 'item' },
            type: 'pie',
          },
        ]}
        {...sizing}
      />
    </div >
  )
}