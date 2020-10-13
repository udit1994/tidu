import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fefff7;
  border-radius: 5px;
  z-index: 200;
  position: fixed;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;

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

function Tooltip({ children, coords, show }) {
  if (!show) {
    return null;
  }

  const { left, top, height } = coords;

  return (
    show && (
      <Wrapper x={left} y={top + height + 10}>
        <p>{children}</p>
      </Wrapper>
    )
  );
}

export default Tooltip;
