
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { IArrayProps, IArrayPropsType } from "../../interfaces/IPropsModel";
import { useSetRecoilState } from "recoil";
import { avg_subject_data_state } from "../../../web_clinet/state/global/SelectorState";

export const TotalBranchSubjectSelector = <T extends IArrayPropsType>({ args }: IArrayProps<T>) => {
  const [value, setValue] = useState<any | null>(args[0]);
  const [inputValue, setInputValue] = useState<string>('');

  const selector_key = "tatal_avg_data_selector"
  const setSelectedRecoilState = useSetRecoilState(avg_subject_data_state(selector_key));

  useEffect(() => {
    if(value != null){
      setSelectedRecoilState(value);
    }
  }, [value])

  return (
    <div style={{marginTop :"5px"}}>
      <Autocomplete
        value={value}
        onChange={(_event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={args}
        sx={{ width: 300 , fontSize :"16px"}}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}