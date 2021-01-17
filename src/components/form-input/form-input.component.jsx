import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, value, label, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...rest} />
      {label ? (
        <label className={`${rest.value ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
