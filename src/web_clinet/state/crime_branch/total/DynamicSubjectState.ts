import { atom } from "recoil";

export const dynamicSubjectState = atom({
    key : "dynamic_subject",
    default : [],
})

export const dynamicSubCategoryState = atom({
    key : "dynamic_sub_category",
    default : []
})

