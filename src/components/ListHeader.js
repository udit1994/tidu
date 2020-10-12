import { useDispatch } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";

import { changeTitle } from "actions/list";
import Tooltip from "components/Tooltip";
import TextInput from "components/InputText";

const colors = ["violet", "orange", "lightblue", "pink"];

export const Wrapper = styled.header`
  background-color: ${(props) => props.backgroundColor};
  font-size: 2em;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 10;
`;

export const Title = styled.p`
  display: inline;
  text-transform: uppercase;
`;

function ListHeader({ children, id, index, showGuide }) {
  const dispatch = useDispatch();

  const [showInput, setShowInput] = useState(false);
  const [showToolTip, setShowTooltip] = useState(false);

  const validation = (data) => {
    if (data.length < 20) {
      setShowTooltip(false);

      return true;
    }

    setShowTooltip(true);

    return false;
  };

  const handleClick = () => {
    setShowInput((showInput) => !showInput);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(changeTitle(id, e.target.value));
      setShowInput((showInput) => !showInput);
    }
  };

  const render = !showInput ? (
    <>
      <Title index={index} onDoubleClick={handleClick}>
        {children}
      </Title>
      <Tooltip show={showGuide && index === 0}>
        Double click to give me a new name!
      </Tooltip>
    </>
  ) : (
    <>
      <TextInput
        defaultValue={children}
        handleBlur={handleClick}
        handleKeyDown={handleKeyDown}
        style={{ backgroundColor: colors[index] }}
        validationCallback={validation}
      />
      <Tooltip show={showToolTip}>
        Max Length 20 characters{" "}
        <span role="img" aria-label="smile">
          🙂
        </span>
      </Tooltip>
    </>
  );

  return <Wrapper backgroundColor={colors[index]}>{render}</Wrapper>;
}

export default React.memo(ListHeader);
