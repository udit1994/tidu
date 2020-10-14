import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useRef } from "react";
import styled from "styled-components";

import { addTodo } from "actions/todo";
import { todoIdSelector } from "selectors/todoSelector";
import { fullScreen } from "mixins";
import { modal } from "mixins";
import Button from "components/Button";
import CloseButton from "components/CloseButton";
import Date from "components/Date";
import defaultDate, { isFutureDate } from "utils/date";
import Form from "components/Form";
import TextArea from "components/Textarea";

export const Close = styled(CloseButton)`
  grid-column: 14/15;
  grid-row: 1/3;

  @media only screen and (max-width: 600px) {
    grid-column: 13/15;
    grid-row: 1/2;
  }
`;

export const MyDate = styled(Date)`
  grid-column: 2/6;
  grid-row: 11/12;

  @media only screen and (max-width: 600px) {
    grid-column: 2/6;
    grid-row: 10/11;
  }
`;

export const MyForm = styled(Form)`
  ${modal}
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(14, 1fr);
`;

export const MyTextArea = styled(TextArea)`
  grid-column: 2/14;
  grid-row: 3/10;

  @media only screen and (max-width: 600px) {
    grid-column: 2/14;
    grid-row: 2/8;
  }
`;

export const Submit = styled(Button)`
  background-color: ${(props) => props.backgroundColor};
  grid-column: 12/14;
  grid-row: 13/14;

  @media only screen and (max-width: 600px) {
    grid-column: 11/14;
    grid-row: 12/14;
  }
`;

export const Wrapper = styled.section`
  ${fullScreen}
  z-index: 150;

  @media only screen and (max-width: 600px) {
    left: 0px;
  }
`;

function AddForm({ setShowForm }) {
  const dispatch = useDispatch();
  const formRef = useRef({});
  const newtodoId = useSelector(todoIdSelector);

  const handleClose = () => {
    setShowForm(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, dueDate } = formRef.current;

    if (description?.length > 0) {
      dispatch(
        addTodo(
          newtodoId,
          description,
          dueDate ? dueDate : defaultDate,
          defaultDate
        )
      );
    }

    handleClose();
  };

  const validationCallback = (data) => {
    if (isFutureDate(data)) {
      return {
        error: null,
        result: true,
      };
    }

    return {
      error: `Past dates not allowed 🙂`,
      result: false,
    };
  };

  return (
    <Wrapper>
      <MyForm formRef={formRef}>
        <Close handleClose={handleClose}>X</Close>
        <MyTextArea
          autoFocus
          name="description"
          placeholder="Definetion of done..."
          value=""
        />
        <MyDate
          defaultValue={defaultDate}
          name="dueDate"
          validationCallback={validationCallback}
        />
        <Submit
          backgroundColor="#6a82fb"
          handleClick={handleSubmit}
          type="submit"
        >
          Add
        </Submit>
      </MyForm>
    </Wrapper>
  );
}

export default React.memo(AddForm);
