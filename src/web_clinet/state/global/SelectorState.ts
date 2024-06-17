import { atom, atomFamily } from "recoil";
import { ICrimeBranchAvgSubjectSeleted, ICrimeBranchMainTransitionSeleted, ICrimeBranchSelected, ICrimeBranchSubSubjectSeleted } from "../../../globals/interfaces/ISelectBoxModel";


export const main_transition_state = atomFamily<ICrimeBranchMainTransitionSeleted,string>({
    key : "main_transition_selector",
    default : () => 
        atom<ICrimeBranchMainTransitionSeleted>({
            key : "transition_key",
            default : {
                label : "절도범죄",
                category : "절도범죄",
                subject : "2023"
            },
    })
})


export const total_branch_state = atomFamily<ICrimeBranchSelected,string>({
    key : "total_branch_selector",
    default : () => 
        atom<ICrimeBranchSelected>({
            key : "total_branch_key",
            default : {
                label : "",
                year : 2024,
                branch : 1,
            },
    })
})

export const avg_subject_data_state = atomFamily<ICrimeBranchAvgSubjectSeleted,string>({
    key : "tatal_avg_data_selector",
    default : () => 
        atom<ICrimeBranchAvgSubjectSeleted>({
            key : "total_avg_key",
            default : {
                label : "발생건수",
                year : 2024,
                branch : 1,
                category : "발생건수",
                subject : "2023"
            },
    })
})


export const sub_subject = atomFamily<ICrimeBranchSubSubjectSeleted,string>({
    key : "sub_subject_selector",
    default : () => 
        atom<ICrimeBranchSubSubjectSeleted>({
            key : "sub_subject_key",
            default : {
                label : "",
                category : "sub",
                branch : 1,
                subject : "발생건수"
            },
    })
})

