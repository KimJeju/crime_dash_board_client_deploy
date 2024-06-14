import { ILineChartData, ISwarmPlotData, ISwarmPlotDataList, ITreeMapData, ITreeMapDataList } from "../interfaces/IChartModel";


export function chart_data_to_array(data: object): Array<number> {

    const result_data: number[] = [];

    Object.entries(data).map((value) => {
        const int_value = Number.parseInt(value[1])
        result_data.push(int_value)

    })

    return result_data;
}

export function chart_data_columns_to_array(data: object) {

    const result_data: string[] = [];

    Object.keys(data).forEach(el => {
        result_data.push(el);
    })

    return result_data;
}

export function get_swarm_chart_data_key_pair_value(data: object) {

    const swarm_list: ISwarmPlotDataList = {
        children: []
    }

    Object.entries(data).map((value) => {

        const swarm_data: ISwarmPlotData = {
            name: value[0],
            value: value[1]
        }

        swarm_list.children.push(swarm_data);
    })
    return swarm_list;
}


export function slice_total_avg_data(data: number[]): number[] {

    const sub_bar_data: number[] = []

    for (let i = 1; i < data.length; ++i) {
        sub_bar_data.push(data[i])
    }

    return sub_bar_data;
}

export function line_chart_data_slice(data: ILineChartData[], index: number) {
    let branch: number = 1;
    const result_list: number[] = []
    for (let i = 0; i < data.length; ++i) {
        if (data[i][branch + "분기"][branch] != undefined) {
            let result = data[i][branch + "분기"][index];
            result_list.push(result);
        }
        branch++;
    }
    return result_list;
}

export function get_tree_map_data_set(data: object) : ITreeMapDataList {
    const result_list: ITreeMapDataList = {
        data: []
    };

    Object.entries(data).map((value) => {
        const result: ITreeMapData = {
            x: value[0],
            y: value[1],
        }

        result_list.data.push(result);
    })

    return result_list;
}