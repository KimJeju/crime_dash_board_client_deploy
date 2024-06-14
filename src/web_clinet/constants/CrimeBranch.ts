import { ICrimeBranchMainTransitionSeleted, ICrimeBranchSelected, ICrimeBranchSubSubjectSeleted } from "../interfaces/ISelectBoxModel";

export const crime_branch_selector_value : Array<ICrimeBranchSelected> = [
    { label : "2024년 1분기 범죄발생 통계", year: 2024, branch : 1},
    { label : "2023년 4분기 범죄발생 통계", year: 2023, branch : 4},
    { label : "2023년 3분기 범죄발생 통계", year: 2023, branch : 3},
    { label : "2023년 2분기 범죄발생 통계", year: 2023, branch : 2},
    { label : "2023년 1분기 범죄발생 통계", year: 2023, branch : 1},
]

export const crime_branch_main_transition_value : Array<ICrimeBranchMainTransitionSeleted> = [
    { label : "절도범죄", category: "main", subject :"절도범죄"},
    { label : "특별경제범죄", category: "main", subject :"특별경제범죄"},
    { label : "마약범죄", category: "main", subject :"마약범죄"},
    { label : "보건범죄", category: "main", subject :"보건범죄"},
    { label : "환경범죄", category: "main", subject :"환경범죄"},
    { label : "교통범죄", category: "main", subject :"교통범죄"},
    { label : "노동범죄", category: "main", subject :"노동범죄"},
    { label : "안보범죄", category: "main", subject :"안보범죄"},
    { label : "선거범죄", category: "main", subject :"선거범죄"},
    { label : "병역범죄", category: "main", subject :"병역범죄"},
    { label : "기타범죄", category: "main", subject :"기타범죄"},
]

export const crime_branch_sub_subject_value : Array<ICrimeBranchSubSubjectSeleted> = [
    { label : "발생건수" ,branch : 1, category: "sub", subject :"발생건수"},
    { label : "검거건수",branch : 1, category: "sub", subject :"검거건수"},
    // { label : "발생대비 검거건수(%)" ,branch : 1, category: "sub", subject :"발생대비 검거건수(%)"},
    { label : "검거인원",branch : 1, category: "sub", subject :"검거인원"},
    { label : "법인체" ,branch : 1, category: "sub", subject :"법인체"},

]

                     