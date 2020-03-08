import React, { useState } from "react";
import { TextField, BaseTextFieldProps } from "@material-ui/core";
import { IValidator } from "../../validator";

interface CTextInputProps extends BaseTextFieldProps {
    validator: IValidator;
    onTextChanged: (event: any) => void;
}

export default function CTextInput(props: CTextInputProps) {
  const {validator, onTextChanged, ...more} = props;

  const [text, setText] = useState(String(props.value));
  const [validationResult, setValidationResult] = useState({isError: false, error: ""});
  const [isBlur, setIsBlur] = useState(false);

  const validate = (text: string) => {
    const isValid =  validator.validate(text);
    if(!isValid) {
      setValidationResult({isError: true, error: validator.error});
    }else {
      setValidationResult({isError: false, error: ""});
    }
  };

  const handleOnTextChanged = (event: any) => {
    onTextChanged(event);
    setText(event.target.value);
    if(isBlur) {
      validate(event.target.value);
    }
  };

  const handleOnBlur = () => {
    setIsBlur(true);
    validate(text);
  };

  return (
    <TextField 
      error={validationResult.isError} 
      helperText={validationResult.error}
      onChange={handleOnTextChanged}
      onBlur={handleOnBlur} 
      {...more} 
      variant="outlined" />
  );
}