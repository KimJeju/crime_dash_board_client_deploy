
export interface IMainChartData {
    ViolentCrime: number[];
    CriminalMastermind: number[];
    ForceCrime: number[];
    MoralCrime: number[];
}

export interface IPieChartData {
    AverageSubject : number[];
}

export interface ILineChartData {
    [key : string] : number[];
}

export interface IMainTransitionChartData {
    Orrurrence: number[];
    Arrest: number[];
    Inspecttion: number[];
    PeopleArrested: number[];
    Coperation : number[];
}

export interface ISwarmPlotData {
    "name" : string;
    "value" : number;
}

export interface ISwarmPlotDataList {
    "children" : ISwarmPlotData[];
}

export interface ITreeMapData {
    x : string,
    y : number
 }

export interface ITreeMapDataList {
    data : ITreeMapData[]
}

export interface  ICandlestickData {
    x : string,
    y : number[]
 }

export interface ICandlestickDataList {
    data : ICandlestickData[]
 }

 export interface IHorizontalBarData {
    [key :string] : number | string,
 }

 export interface IHorizontalBarDataList {
    series : IHorizontalBarData[]
}

 



export interface IDictData {
    [key : string ]:number;
}

