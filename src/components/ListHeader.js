import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { changeTitle } from "actions/list";
import Tooltip from "components/Tooltip";
import InputText from "components/InputText";
import Form from "components/Form";

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
  const formRef = useRef({});

  const [showInput, setShowInput] = useState(false);

  const validationCallback = (data) => {
    if (data.length < 20) {
      return { result: true };
    }

    return {
      result: false,
      error: ` Max Length 20 characters 🙂`,
    };
  };

  const handleBlur = () => {
    const { header } = formRef.current;

    if (header) {
      dispatch(changeTitle(id, header));
    }
    setShowInput((showInput) => !showInput);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleBlur();
    }
  };

  const render = !showInput ? (
    <>
      <Title index={index} onDoubleClick={handleBlur}>
        {children}
      </Title>
      <Tooltip show={showGuide && index === 0}>
        Double click to give me a new name!
      </Tooltip>
    </>
  ) : (
    <Form formRef={formRef}>
      <InputText
        defaultValue={children}
        handleBlur={handleBlur}
        handleKeyDown={handleKeyDown}
        name="header"
        style={{ backgroundColor: colors[index] }}
        validationCallback={validationCallback}
      />
    </Form>
  );

  return <Wrapper backgroundColor={colors[index]}>{render}</Wrapper>;
}

export default React.memo(ListHeader);
