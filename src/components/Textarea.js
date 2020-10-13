import React from "react";
import styled from "styled-components";

import { InputStyle } from "mixins";
import Tooltip from "components/Tooltip";
import useInput from "hooks/useInput";

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
  const [field, handleChange] = useInput(defaultValue, formRef, name, null);

  return (
    <>
      <CustomTextarea
        autoFocus={autofocus}
        className={className}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : ""}
        value={field.data}
      />
      <Tooltip show={field.error}>{field.error}</Tooltip>
    </>
  );
}

export default TextArea;
