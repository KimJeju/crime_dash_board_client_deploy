import ApexCharts from "react-apexcharts";
import { IArgumentType } from "../../../../globals/interfaces/IPropsModel";
import { chart_data_to_array } from "../../../../globals/utils/ChartDataUtil";

export function MobileSubPyramidChart({ data }: { data: IArgumentType }) {


    const number_data = chart_data_to_array(data.args);

    //오름차순 정렬
    number_data.sort((a: number, b: number): number => {
        return b - a;
    });

    //1위부터 8위까지 간추리기
    number_data.length = 8;
    
    //다시 내림차순 정렬
    number_data.sort((a: number, b: number): number => {
        return a - b;
    });
    
    const series = [
        {
            name: "",
            data: number_data
        },
    ];

    return (
        <>
            <ApexCharts
                type="bar" height={550} series={series}
                options={{
                    chart: {
                        type: 'bar',
                        height: 550,
                        foreColor: 'black'
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            horizontal: true,
                            distributed: true,
                            barHeight: '80%',
                            isFunnel: true,
                        },
                        
                    },
                    colors: [
                        '#F44F5E',
                        '#E55A89',
                        '#D863B1',
                        '#CA6CD8',
                        '#B57BED',
                        '#8D95EB',
                        '#62ACEA',
                        '#4BC3E6',
                    
                    ],
                    dataLabels: {
                        enabled: true,
                        formatter: function (val, opt) {
                            console.warn(val);
                            return opt.w.globals.labels[opt.dataPointIndex]
                        },
                        dropShadow: {
                            enabled: true,
                        },
                        
                    },
                    title: {
                        text: '소분류 범죄발생건 1위 ~ 8위 (건)',
                        align : "center",
                        style : {
                            fontWeight : 400,
                            
                        }
                    },
                    xaxis: {
                        categories: ['강제추행', '성품속범죄', '상해', '협박', '손괴', '횡령', '폭행', '사기'],
                        labels : {
                            style : {
                                colors : ["#ffffff"]
                            }
                        }
                    },
                    legend: {
                        show: false,
                    
                    },
                   
                   
                }}
            >
            </ApexCharts>
        </>
    )
}