import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: pink;
  border-radius: 5px;
  display: inline;
  left: ${(props) => props.x}px;
  padding: 2px;
  position: fixed;
  top: ${(props) => props.y}px;
  z-index: 200;

  ::after {
    border: 5px solid;
    border-color: transparent transparent pink transparent;
    content: "";
    left: 50%;
    margin: auto;
    position: absolute;
    top: -10px;
  }
`;

function Tooltip({ children, coords, show }) {
  if (!show) {
    return null;
  }

  const { height, left, top } = coords;

  return (
    show && (
      <Wrapper x={left} y={top + height + 10}>
        <p>{children}</p>
      </Wrapper>
    )
  );
}

export default Tooltip;
