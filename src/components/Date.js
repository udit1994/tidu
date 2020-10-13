import React, { useRef } from "react";
import styled from "styled-components";

import Tooltip from "components/Tooltip";
import useInput from "hooks/useInput";
import { InputStyle } from "mixins";

export const CustomDate = styled.input`
  ${InputStyle}
`;

function Date({ className, defaultValue, formRef, name, validationCallback }) {
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
      <CustomDate
        className={className}
        onChange={handleChange}
        ref={callbackRef}
        type="date"
        value={field.data}
      />
      <Tooltip show={field.error} coords={tooltipRef.current}>
        {field.error}
      </Tooltip>
    </>
  );
}

export default Date;
