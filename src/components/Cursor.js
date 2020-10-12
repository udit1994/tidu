import React from "react";
import styled from "styled-components";

import { ReactComponent as CursorPointer } from "assets/cursorPointer.svg";
import { ReactComponent as CursorSphere } from "assets/cursorSphere.svg";

const cursor = () => `
  position: fixed;
  pointer-events: none;
  z-index: 200;

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    display: block;
  }
`;

const Sphere = styled(CursorSphere)`
  ${cursor}

  :first-child {
    fill: transparent;
    stroke-width: 2px;
    stroke: #ea2e6e;
  }
`;

const Pointer = styled(CursorPointer)`
  ${cursor}
`;

function Cursor({ coords }) {
  const { x, y } = coords;

  return (
    <>
      <Sphere
        style={{
          transitionProperty: "all",
          transitionDuration: ".20s",
          transform: `translate(${x - 10}px, ${y - 10}px) rotate(${x - y}deg)`,
        }}
      />
      <Pointer style={{ transform: `translate(${x}px, ${y}px)` }} />
    </>
  );
}

export default Cursor;
