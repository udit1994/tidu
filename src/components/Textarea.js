import React, { useState } from "react";
import styled from "styled-components";

import { InputStyle } from "mixins";

export const CustomTextarea = styled.textarea`
  ${InputStyle}
  resize: none;
  padding: 12px 20px;
`;

function TextArea({
  autofocus,
  className,
  defaultValue,
  formRef,
  name,
  placeholder,
}) {
  const [value, setValue] = useState(defaultValue ? defaultValue : "");

  const handleChange = (e) => {
    const value = e.target.value;

    formRef.current[name] = value;
    setValue(value);
  };

  return (
    <CustomTextarea
      autoFocus={autofocus}
      className={className}
      onChange={handleChange}
      placeholder={placeholder ? placeholder : ""}
      value={value}
    />
  );
}

export default TextArea;
