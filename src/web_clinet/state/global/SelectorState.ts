import { atom, atomFamily } from "recoil";
import { ICrimeBranchMainTransitionSeleted, ICrimeBranchSelected, ICrimeBranchSubSubjectSeleted } from "../../interfaces/ISelectBoxModel";


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

