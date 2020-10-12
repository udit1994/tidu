import React, { useState } from "react";
import styled from "styled-components";

export const CustomInput = styled.input`
  border: 0;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

function TextInput({
  defaultValue,
  handleBlur,
  handleKeyDown,
  style,
  validationCallback,
}) {
  const [value, setValue] = useState(defaultValue ? defaultValue : "");

  const handleChange = (e) => {
    const data = e.target.value;

    if (validationCallback(data)) {
      setValue(data);
    }
  };

  return (
    <CustomInput
      autoFocus
      onBlur={handleBlur ? handleBlur : null}
      onChange={handleChange ? handleChange : null}
      onKeyDown={handleKeyDown ? handleKeyDown : null}
      style={style}
      type="text"
      value={value}
    />
  );
}

export default TextInput;
