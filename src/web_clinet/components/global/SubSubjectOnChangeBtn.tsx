import { useRecoilState, useRecoilValue } from "recoil";
import { sub_subject, total_branch_state } from "../../state/global/SelectorState";
import { get_dynamic_subject_data } from "../../contexts/CrimeBranchContext";
import { Button } from "@mui/material";
import { subDataSubjectState } from "../../state/crime_branch/sub/SubDataState";



export function SubSubjectOnChangeBtn(){
    const [, setSubDataSubject] = useRecoilState(subDataSubjectState);
    
    const selector_branch_key = "total_branch_selector";
    const seletected_branch_value = useRecoilValue(total_branch_state(selector_branch_key));

    const selector_sub_subject_key = "sub_subject_selector";
    const seletected_sub_subject_value = useRecoilValue(sub_subject(selector_sub_subject_key));

    async function onChangeTransition(){
        try{        
        const sub_subject_data = await get_dynamic_subject_data(
             seletected_branch_value.year.toString(),
             seletected_branch_value.branch, 
             seletected_sub_subject_value.category,
             seletected_sub_subject_value.subject
            );

            console.log(
                seletected_branch_value.year.toString(),
                seletected_branch_value.branch, 
                seletected_sub_subject_value.category,
                seletected_sub_subject_value.subject
            )

            console.log(sub_subject_data)

            setSubDataSubject(sub_subject_data)
        }catch(error){
            console.log(error);
            return;
        }
    }
    return(
        <Button variant="contained" style={{ width : "calc(10%)", marginLeft : "1vw"}}
        onClick={() => {
            onChangeTransition();
        }}>검색</Button>
    )
}