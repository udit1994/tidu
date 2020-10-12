import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fefff7;
  border-radius: 5px;
  left: 50px;
  margin: 10px;
  padding: 0 5px;
  position: absolute;
  top: 30px;

  ::after {
    border: 5px solid;
    border-color: transparent transparent white transparent;
    content: "";
    left: 100px;
    position: absolute;
    top: -10px;
    margin: auto;
  }
`;

function Tooltip({ children, show }) {
  return (
    show && (
      <Wrapper>
        <p>{children}</p>
      </Wrapper>
    )
  );
}

export default Tooltip;
