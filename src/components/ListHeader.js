import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { changeTitle } from "actions/list";
import Form from "components/Form";
import InputText from "components/InputText";

const colors = ["violet", "orange", "lightblue", "pink"];

const Wrapper = styled.header`
  background-color: ${(props) => props.backgroundColor};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 30px;
  padding-top: 5px;
  text-align: center;
  z-index: 10;
`;

const Title = styled.p`
  margin: 0;
`;

function ListHeader({ children, id, index }) {
  const dispatch = useDispatch();
  const formRef = useRef({});

  const [showInput, setShowInput] = useState(false);

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

  const validationCallback = (data) => {
    if (data.length < 20) {
      return { result: true };
    }

    return {
      error: ` Max Length 20 characters 🙂`,
      result: false,
    };
  };

  const render = !showInput ? (
    <Title index={index} onDoubleClick={handleBlur}>
      {children}
    </Title>
  ) : (
    <Form formRef={formRef}>
      <InputText
        defaultValue={children}
        handleBlur={handleBlur}
        handleKeyDown={handleKeyDown}
        name="header"
        style={{ backgroundColor: colors[id - 1] }}
        validationCallback={validationCallback}
      />
    </Form>
  );

  return <Wrapper backgroundColor={colors[id - 1]}>{render}</Wrapper>;
}

export default React.memo(ListHeader);
