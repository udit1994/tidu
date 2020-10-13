import React from "react";
import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: #6a82fb;
  border-radius: 20px;
  border: 0;
  color: #ffffff;
  height: 100%;
  text-align: center;
  width: 100%;

  &:hover {
    transform: translateY(-1px);
  }
`;

function Button({ children, className, handleClick, type }) {
  return (
    <CustomButton className={className} onClick={handleClick} type={type}>
      {children}
    </CustomButton>
  );
}

export default Button;
