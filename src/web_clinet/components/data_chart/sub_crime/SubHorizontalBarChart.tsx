import { BarChart } from '@mui/x-charts/BarChart';
import { IArgumentType } from '../../../interfaces/IPropsModel';
import { IHorizontalBarData, IHorizontalBarDataList } from '../../../interfaces/IChartModel';
import { Box } from '@mui/material';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  xAxis: [
    {
      label: '소분류 발생 통계',
    },
  ],
  height: 900,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const valueFormatter = (value: number | null) => `${value} (건)`;


export default function SubHorizontalBarChart({ data }: { data: IArgumentType }) {

  const chart_list : IHorizontalBarDataList = {
    series : []
  }

  if (data.args["강간"] != undefined) {
    const data_set = [
      data.args
    ]

    Object.entries(data.args).map((el) => {
      const chart_data: IHorizontalBarData = {
        [el[0] as string]: el[1] as number,
        ["key"]: el[0] as string,
      }
      chart_list.series.push(chart_data);

    })
    return (
      <Box sx={{ width: '100%' }}>
      <BarChart
        dataset={data_set}
        series={[
          { dataKey: '강간', label: '강간', valueFormatter },
          { dataKey: '강도', label: '강도', valueFormatter },
          { dataKey: '강제추행', label: '강제추행', valueFormatter },
          { dataKey: '기타 강간/강제추행등', label: '기타 강간/강제추행등', valueFormatter },
          { dataKey: '도박범죄', label: '도박범죄', valueFormatter },
          { dataKey: '문서/인장', label: '문서/인장', valueFormatter },
          { dataKey: '방화', label: '방화', valueFormatter },
          { dataKey: '배임', label: '배임', valueFormatter },
          { dataKey: '살인기수', label: '살인기수', valueFormatter },
          { dataKey: '살인미수등', label: '살인미수등', valueFormatter },
          { dataKey: '상해', label: '상해', valueFormatter },
          { dataKey: '성풍속범죄', label: '성풍속범죄', valueFormatter },
          { dataKey: '약취/유인', label: '약취/유인', valueFormatter },
          { dataKey: '손괴', label: '손괴', valueFormatter },
          { dataKey: '유가증권인지', label: '유가증권인지', valueFormatter },
          { dataKey: '유사강간', label: '유사강간', valueFormatter },
          { dataKey: '증수뢰', label: '증수뢰', valueFormatter },
          { dataKey: '직권남용', label: '직권남용', valueFormatter },
          { dataKey: '직무유기', label: '직무유기', valueFormatter },
          { dataKey: '체포/감금', label: '체포/감금', valueFormatter },
          { dataKey: '통화', label: '통화', valueFormatter },
          { dataKey: '폭력행위등', label: '폭력행위등', valueFormatter },
          { dataKey: '폭행', label: '폭행', valueFormatter },
          { dataKey: '협박', label: '협박', valueFormatter },
          { dataKey: '횡령', label: '횡령', valueFormatter },
        ]}
        margin={{ left : 5, top: 5}}
        layout="horizontal"
        grid={{ vertical: true }}
        {...chartSetting}
      />
      </Box>
    );
  }
} 