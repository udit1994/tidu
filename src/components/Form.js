import React from "react";
import styled from "styled-components";

export const CustomForm = styled.form`
  background-color: #fefff7;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(14, 1fr);
  height: 300px;
  opacity: 1;
  width: 600px;
  z-index: 200;

  @media only screen and (max-width: 600px) {
    height: 300px;
  }
`;

function Form({ children, formRef }) {
  return (
    <CustomForm>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { formRef })
      )}
    </CustomForm>
  );
}

export default Form;
