import React from "react";
import styled from "styled-components";

export const CustomButton = styled.button`
  align-items: center;
  background-color: red;
  border-radius: 50%;
  border: 0;
  color: white;
  display: flex;
  height: 25px;
  justify-content: center;
  justify-self: end;
  line-height: 1;
  margin-right: 10px;
  margin-top: 10px;
  padding: 0;
  width: 25px;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

function CloseButton({ children, className, handleClose }) {
  return (
    <CustomButton className={className} onClick={handleClose}>
      {children}
    </CustomButton>
  );
}

export default CloseButton;
