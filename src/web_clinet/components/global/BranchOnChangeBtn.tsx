import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { totalCrimebranchState } from "../../state/crime_branch/total/CrimeBranchState";
import { dynamicSubCategoryState } from "../../state/crime_branch/total/DynamicSubjectState";
import { arrestAverageState, occurrencesAverageState } from "../../state/crime_branch/total/SubjectAverageState";
import { select_main_data_on_load, select_sub_data_on_load, seleted_data_on_load } from "../../contexts/CrimeBranchContext";
import { mainDataArrestPeopleState, mainDataArrestPersentState, mainDataArrestState, mainDataOccurrenceState } from "../../state/crime_branch/main/MainDataState";
import { total_branch_state } from "../../state/global/SelectorState";
import { subDataSubjectState } from "../../state/crime_branch/sub/SubDataState";

export default function BranchOnChangeBtn() {


    const selector_key = "total_branch_selector";
    const seletected_value = useRecoilValue(total_branch_state(selector_key));

    //총계
    const [,setTotalData] = useRecoilState(totalCrimebranchState);
    const [,setSubCrimeData] = useRecoilState(dynamicSubCategoryState);
    const [,setAvgOccurencesData] = useRecoilState(occurrencesAverageState);
    const [,setAvgArrestData] = useRecoilState(arrestAverageState);

    //대분류
    const [, setMainOccurenceData] = useRecoilState(mainDataOccurrenceState); // 중분류 범죄발생추이
    const [, setMainArrestData] = useRecoilState(mainDataArrestState); // 중분류 검거건 추이
    const [, setMainArrestPeopleData] = useRecoilState(mainDataArrestPeopleState); // 중분류 검거인원
    const [, setMainArrestPersentData] = useRecoilState(mainDataArrestPersentState); // 중분류 검거인원

    //소분류
    const [, setSubDataSubject] = useRecoilState(subDataSubjectState);

    async function onChangeCrimeBranch() {
        try {

            const seleted_total_data = await seleted_data_on_load(seletected_value.year.toString(), seletected_value.branch, "average");
            const seleted_main_data = await select_main_data_on_load(seletected_value.year.toString(), seletected_value.branch, "main");
            const seleted_sub_data = await select_sub_data_on_load(seletected_value.year.toString(),seletected_value.branch, "sub");

            if (seleted_total_data != undefined && seleted_main_data != undefined) {
                
                //총계
                setTotalData({
                    average: seleted_total_data[0].average,
                    main: seleted_total_data[0].main,
                    sub: seleted_total_data[0].sub
                })
                setSubCrimeData(seleted_total_data[1]);
                setAvgOccurencesData(seleted_total_data[2]);
                setAvgArrestData(seleted_total_data[3]);

                //대분류
                setMainOccurenceData(seleted_main_data[0])
                setMainArrestData(seleted_main_data[1])
                setMainArrestPeopleData(seleted_main_data[2])
                setMainArrestPersentData(seleted_main_data[3])

                //소분류
                setSubDataSubject(seleted_sub_data)
            }

        } catch (error) {
            console.log(error);
            return;
        }
    }

    return (
        <Button variant="contained" style={{ width : "calc(25%)"}}
            onClick={() => {
                onChangeCrimeBranch();
            }}>검색</Button>
    )
}