import React, { useState } from "react";
import styled from "styled-components";

import { InputStyle } from "mixins";

export const CustomSelect = styled.select`
  ${InputStyle}
`;

function Select({ children, className, defaultValue, formRef, name }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const { value } = e.target;

    setValue(value);
    formRef.current[name] = value;
  };

  return (
    <CustomSelect className={className} onChange={handleChange} value={value}>
      {children}
    </CustomSelect>
  );
}

export default Select;
