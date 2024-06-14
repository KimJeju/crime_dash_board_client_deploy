import ApexCharts from "react-apexcharts";
import { IArgumentType } from "../../../interfaces/IPropsModel";
import { get_tree_map_data_set } from "../../../utils/ChartDataUtil";

import { makeStyles } from "tss-react/mui";
const useStyle = makeStyles()(() => {
    return {
        root: {
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            transition: "0.2s",
            paddingLeft: "1vw",
            "&:hover": {
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px",

            }
        },
    }
})


export function MainTreeMap({ data }: { data: IArgumentType }) {

    const { classes } = useStyle()
    
    let data_set = get_tree_map_data_set(data.args);

    //분기 변화 시 데이터 초기화 후 재 정의
    if (data_set.data != null) {
        data_set.data = [];

        data_set = get_tree_map_data_set(data.args);
    }
    return (
        <div className={classes.root}>
            <ApexCharts
                type="treemap"
                series={[
                    {
                        data: data_set.data
                    }
                ]}
                options={{
                    legend: {
                        show: true
                    },
                    chart: {
                        height: 650,
                        type: 'treemap'
                    },
                    title: {
                        text: '발생대비 검거건수 트리맵 (%)',
                        align: 'center'
                    },
                    colors: [
                        '#3B93A5',
                        '#F7B844',
                        '#ADD8C7',
                        '#EC3C65',
                        '#CDD7B6',
                        '#C1F666',
                        '#D43F97',
                        '#1E5D8C',
                        '#421243',
                        '#7F94B0',
                        '#EF6537',
                        '#C0ADDB'
                    ],
                    plotOptions: {
                        treemap: {
                            distributed: true,
                            enableShades: false
                        }
                    }
                }}>
            </ApexCharts>
        </div>
    );
}