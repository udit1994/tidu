import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: pink;
  border-radius: 5px;
  z-index: 200;
  padding: 2px;
  position: fixed;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  display: inline;

  ::after {
    border: 5px solid;
    border-color: transparent transparent pink transparent;
    content: "";
    left: 50%;
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
