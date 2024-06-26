import { useRecoilState, useRecoilValue } from "recoil";

import { Button } from "@mui/material";
import { avg_subject_data_state, total_branch_state } from "../../web_clinet/state/global/SelectorState";
import { get_dynamic_subject_data } from "../../globals/contexts/CrimeBranchContext";
import { mobileCrimeBranchTotalAvgSubjectState } from "../state/mobile_crime_branch/mobile_total/MobileTotalCrimeState";



export function AvgSubjectOnChangeBtn(){
    const [, setAvgSubjectDataSubject] = useRecoilState(mobileCrimeBranchTotalAvgSubjectState);
    
    const selector_branch_key = "total_branch_selector";
    const seletected_branch_value = useRecoilValue(total_branch_state(selector_branch_key));

    const selector_sub_subject_key = "tatal_avg_data_selector";
    const seletected_sub_subject_value = useRecoilValue(avg_subject_data_state(selector_sub_subject_key));

    async function onChangeMobileTotalAvg(){
        try{        
        const sub_subject_data = await get_dynamic_subject_data(
             seletected_branch_value.year.toString(),
             seletected_branch_value.branch, 
             seletected_sub_subject_value.category,
             seletected_sub_subject_value.subject
            )

            setAvgSubjectDataSubject(sub_subject_data)
        }catch(error){
            console.log(error);
            return;
        }
    }
    return(
        <Button variant="contained" style={{ width : "calc(5%)", marginTop : "0.5vh"}}
        onClick={() => {
            onChangeMobileTotalAvg();
        }}>검색</Button>
    )
}