import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, value, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel
          className={`${props.value ? "shrink" : ""} form-input-label`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
