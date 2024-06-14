export type CommonSeleted = {
    label : string,
}

export interface ICrimeBranchSelected extends CommonSeleted{
    year : number,
    branch : number,
}

export interface ICrimeBranchMainTransitionSeleted extends CommonSeleted{
    category : string,
    subject : string,
}

export interface ICrimeBranchSubSubjectSeleted extends CommonSeleted {
    branch : number,
    category : string,
    subject : string
}

