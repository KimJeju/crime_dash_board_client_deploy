import axios from "axios";
import { crime_branch_default_url } from "../constants/GlobalConstant";
import { ITotalData } from "../interfaces/ICrimeBranchModel";

//on load 시 실행 될 함수
export async function default_data_on_load() {
    try {
        const total_crime = await total_crime_branch_data();
        const sub_crime = await get_dynamic_subject_data("2024", 1, "sub", "발생건수");
        const occurrences_data = await get_dynamic_subject_data("2024", 1, "average", "발생건수");
        const arrest_data = await get_dynamic_subject_data("2024", 1, "average", "검거건수")
        const crime_branch_transition = await get_crime_branch_transiiton("average", "발생건수");
        return [total_crime, crime_branch_transition, sub_crime, occurrences_data, arrest_data,];

    } catch (error) {
        console.log(error);
        return;
    } finally {
        console.log("")
    }
}

// 분기 선택 시 실행 될 함수
export async function seleted_data_on_load(year: string, branch: number, subject: string,) {
    try {
        const total_crime = await selected_branch_crime_data(year, branch);
        const sub_crime = await get_dynamic_subject_data(year, branch, "sub", "발생건수");
        const occurrences_data = await get_dynamic_subject_data(year, branch, subject, "발생건수");
        const arrest_data = await get_dynamic_subject_data(year, branch, subject, "검거건수");
        return [total_crime, sub_crime, occurrences_data, arrest_data,];
    } catch (error) {
        console.log(error);
        return;
    } finally {
        console.log("")
    }
}

//대분류 데이터 모두 가져오기
export async function default_main_data_on_load(year: string, branch: number, cagetory: string) {
    try {
        const main_occurrence = await get_dynamic_subject_data(year, branch, cagetory, "발생건수");
        const main_arrest = await get_dynamic_subject_data(year, branch, cagetory, "검거건수");
        const main_arrest_people = await get_dynamic_subject_data(year, branch, cagetory, "검거인원");
        const main_arrest_persent = await get_dynamic_subject_data(year, branch, cagetory, "발생대비 검거건수(%)");
        const main_arrest_transition_subject = await get_subject_categorize_branch_transition(cagetory, "특별경제범죄");

        return [main_occurrence, main_arrest, main_arrest_people, main_arrest_persent, main_arrest_transition_subject]

    } catch (error) {
        console.log(error);
    }
}

//대분류 분기에 따라 가져오기 데이터 모두 가져오기
export async function select_main_data_on_load(year: string, branch: number, cagetory: string) {
    try{
        const main_occurrence = await get_dynamic_subject_data(year, branch, cagetory, "발생건수");
        const main_arrest = await get_dynamic_subject_data(year, branch, cagetory, "검거건수");
        const main_arrest_people = await get_dynamic_subject_data(year, branch, cagetory, "검거인원");
        const main_arrest_persent = await get_dynamic_subject_data("2023", 1, "main", "발생대비 검거건수(%)");

        return [main_occurrence, main_arrest, main_arrest_people, main_arrest_persent]
    }catch(error){
        console.log(error)
    }
}

//대분류 분기에 따라 가져오기 데이터 모두 가져오기
export async function select_sub_data_on_load(year: string, branch: number, cagetory: string) {
    try{
        const sub_subject_data = await get_dynamic_subject_data(year, branch, cagetory, "발생건수");
        // const main_arrest_persent = await get_dynamic_subject_data("2023", 1, "main", "발생대비 검거건수(%)");
        return sub_subject_data
    }catch(error){
        console.log(error)
    }
}



//데이터 총계 가져오는 함수
export async function total_crime_branch_data() {
    const total_crime = await axios.get(
        crime_branch_default_url
    ).then((response) => {

        const total_Data: ITotalData = {
            average: response.data['average'],
            main: response.data['main'],
            sub: response.data['sub']
        }

        return total_Data;
    }).catch((error) => {
        console.log(error);
    })
    return total_crime;
}

//선택 된 년도 및 분기에서 데이터를 가져오는 함수
export async function selected_branch_crime_data(year: string, branch: number) {
    const response = await axios.get(
        crime_branch_default_url + "seleted?year=" + year + "&branch=" + branch
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    })
    return response;
}

//2023년 모든 분기 자료들을 가져올 함수
export async function get_crime_branch_transiiton(cagetory: string, subject: string) {
    const response = await axios.get(
        crime_branch_default_url + "transition?cagetory=" + cagetory + "&subject=" + subject
    ).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error)
    })
    return response
}

//2023년 분기 세부항목 별 데이터를 가져올 함수
export async function get_subject_categorize_branch_transition(category: string, subject: string) {
    const response = await axios.get(
        crime_branch_default_url + "subject_categorize_transition?cagetory=" + category + "&subject=" + subject
    ).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error)
    })
    return response;
}

//인자에 따라 subject 데이터를 가져올 함수
export async function get_dynamic_subject_data(year: string, branch: number, category: string, subject: string) {
    const response = await axios.get(
        crime_branch_default_url + "dynamic_subject?year=" + year + "&branch=" + branch + "&category=" + category + "&subject=" + subject
    ).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error)
    })

    return response
}


