import React from "react";
import styled from "styled-components";

import { InputStyle } from "mixins";
import Tooltip from "components/Tooltip";
import useInput from "hooks/useInput";
import useTooltip from "hooks/useTooltip";

export const CustomTextarea = styled.textarea`
  ${InputStyle}
  padding: 12px 20px;
  resize: none;
`;

function TextArea({
  autoFocus,
  className,
  defaultValue,
  formRef,
  name,
  placeholder,
}) {
  const [field, handleChange] = useInput(defaultValue, formRef, name, null);
  const [tooltipRef, callbackRef] = useTooltip();

  return (
    <>
      <CustomTextarea
        autoFocus={autoFocus}
        className={className}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : ""}
        ref={callbackRef}
        value={field.data}
      />
      <Tooltip coords={tooltipRef.current} show={field.error}>
        {field.error}
      </Tooltip>
    </>
  );
}

export default TextArea;
