
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { IArrayProps, IArrayPropsType } from "../../interfaces/IPropsModel";
import { useSetRecoilState } from "recoil";
import { sub_subject } from "../../state/global/SelectorState";

export const SubSubjectSelector = <T extends IArrayPropsType>({ args }: IArrayProps<T>) => {
  const [value, setValue] = useState<any | null>(args[0]);
  const [inputValue, setInputValue] = useState<string>('');

  const selector_key = "sub_subject_selector"
  const setSelectedRecoilState = useSetRecoilState(sub_subject(selector_key));

  useEffect(() => {
    if(value != null){
      setSelectedRecoilState(value);
    }
  }, [value])

  console.log(value);

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