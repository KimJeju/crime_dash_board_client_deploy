import { atom } from "recoil";


export const occurrencesAverageState = atom({
    key : "occurrences_avg",
    default: [],
})

export const arrestAverageState = atom({
    key : "arrest_avg",
    default : []
})
