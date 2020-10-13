import React from "react";
import styled from "styled-components";

import { InputStyle } from "mixins";
import Tooltip from "components/Tooltip";
import useInput from "hooks/useInput";
import useTooltip from "hooks/useTooltip";

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

  const [tooltipRef, callbackRef] = useTooltip();

  return (
    <>
      <CustomDate
        className={className}
        onChange={handleChange}
        ref={callbackRef}
        type="date"
        value={field.data}
      />
      <Tooltip coords={tooltipRef.current} show={field.error}>
        {field.error}
      </Tooltip>
    </>
  );
}

export default Date;
