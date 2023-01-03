import React from "react";
import { TextField } from "@material-ui/core";

function InputField({
  type,
  name,
  label,
  placeholder,
  onChange,
  value,
  error,
  inputProps,
}) {
  return (
    <TextField
      type={type}
      name={name}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      error={error}
      inputProps={inputProps}
      fullWidth
      margin="normal"
      required
      autoFocus
    ></TextField>
  );
}

export default InputField;
