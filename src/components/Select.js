import React, { useState } from "react";
import styled from "styled-components";

import { InputStyle } from "mixins";

export const CustomSelect = styled.select`
  ${InputStyle}
`;

function Select({ children, className, defaultValue, name, formRef }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const { value } = e.target;

    setValue(value);
    formRef.current[name] = value;
  };

  return (
    <CustomSelect value={value} className={className} onChange={handleChange}>
      {children}
    </CustomSelect>
  );
}

export default Select;
