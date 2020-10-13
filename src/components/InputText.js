import React from "react";
import styled from "styled-components";

import Tooltip from "components/Tooltip";
import useTooltip from "hooks/useTooltip";
import useInput from "hooks/useInput";

export const CustomInput = styled.input`
  border: 0;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

function InputText({
  className,
  defaultValue,
  formRef,
  handleBlur,
  handleKeyDown,
  name,
  style,
  validationCallback,
}) {
  const [field, handleChange] = useInput(
    defaultValue,
    formRef,
    name,
    validationCallback
  );
  const [tooltipRef, callbackRef] = useTooltip();

  return (
    <>
      <CustomInput
        className={className}
        autoFocus
        onBlur={handleBlur ? handleBlur : null}
        onChange={handleChange ? handleChange : null}
        onKeyDown={handleKeyDown ? handleKeyDown : null}
        ref={callbackRef}
        style={style}
        type="text"
        value={field.data}
      />
      <Tooltip show={field.error} coords={tooltipRef.current}>
        {field.error}
      </Tooltip>
    </>
  );
}

export default InputText;
