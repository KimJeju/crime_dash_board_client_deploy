import { useRecoilState, useRecoilValue } from "recoil";
import { mainDataTrainsitionSubjectCaterozieState } from "../../state/crime_branch/main/MainDataState";
import { main_transition_state } from "../../state/global/SelectorState";
import { get_subject_categorize_branch_transition } from "../../contexts/CrimeBranchContext";
import { Button } from "@mui/material";



export function MainTransitionOnChangeBtn(){
    const [, setMainTransitiondSubjectCatetorizeData] = useRecoilState(mainDataTrainsitionSubjectCaterozieState); //중분류 세부항목 분기별 통계

    const selector_key = "main_transition_selector";
    const seletected_value = useRecoilValue(main_transition_state(selector_key));

    async function onChangeTransition(){
        try{        
        const transition_data = await get_subject_categorize_branch_transition(seletected_value.category, seletected_value.subject);
        setMainTransitiondSubjectCatetorizeData(transition_data);
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