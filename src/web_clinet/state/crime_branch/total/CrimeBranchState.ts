import { atom } from "recoil";

export const totalCrimebranchState = atom<object | any>({
    key : "crime_branch",
    default : []
})

export const crimeBranchTransitionState = atom({
    key : "crime_branch_transition",
    default : []
})