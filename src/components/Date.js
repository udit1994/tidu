import React, { useState } from "react";
import styled from "styled-components";

import { InputStyle } from "mixins";

export const CustomDate = styled.input`
  ${InputStyle}
`;

function Date({ className, defaultValue, formRef, name, validation }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const { value } = e.target;

    if (validation) {
      if (validation(value)) {
        setValue(value);

        formRef.current[name] = value;
      }

      return;
    }

    setValue(value);
  };

  return (
    <CustomDate
      className={className}
      onChange={handleChange}
      type="date"
      value={value}
    />
  );
}

export default Date;
