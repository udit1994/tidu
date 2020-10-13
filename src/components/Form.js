import React from "react";
import styled from "styled-components";

export const CustomForm = styled.form``;

function Form({ children, formRef, className }) {
  return (
    <CustomForm className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { formRef })
      )}
    </CustomForm>
  );
}

export default Form;
