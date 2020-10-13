import React, { useRef } from "react";
import styled from "styled-components";

import Tooltip from "components/Tooltip";
import useInput from "hooks/useInput";

export const CustomInput = styled.input`
  border: 0;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

function InputText({
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

  const tooltipRef = useRef();

  const callbackRef = (element) => {
    tooltipRef.current = element?.getBoundingClientRect();
  };

  return (
    <>
      <CustomInput
        autoFocus
        onBlur={handleBlur ? handleBlur : null}
        onChange={handleChange ? handleChange : null}
        onKeyDown={handleKeyDown ? handleKeyDown : null}
        style={style}
        type="text"
        value={field.data}
        ref={callbackRef}
      />
      <Tooltip show={field.error} coords={tooltipRef.current}>
        {field.error}
      </Tooltip>
    </>
  );
}

export default InputText;
