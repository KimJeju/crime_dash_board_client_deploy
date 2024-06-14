import { ICrimeBranchMainTransitionSeleted , ICrimeBranchSelected, ICrimeBranchSubSubjectSeleted } from "./ISelectBoxModel"

export type IArrayPropsType = Array<ICrimeBranchSelected |  ICrimeBranchMainTransitionSeleted | ICrimeBranchSubSubjectSeleted | number | string>

export type IArrayProps<T> = {
    args : T,
} 

export type IArgumentType = {
    key : string,
    args : any
}