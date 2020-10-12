import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useRef } from "react";
import styled from "styled-components";

import { addTodo, deselectTodo } from "actions/todo";
import { cardIdSelector } from "selectors/cardSelector";

import { fullWidthModal } from "mixins";
import Button from "components/Button";
import CloseButton from "components/CloseButton";
import Date from "components/Date";
import defaultDate, { isFutureDate } from "utils/date";
import Form from "components/Form";
import TextArea from "components/Textarea";

export const MyDate = styled(Date)`
  grid-column: 2/6;
  grid-row: 11/12;

  @media only screen and (max-width: 600px) {
    grid-column: 2/6;
    grid-row: 10/11;
  }
`;

export const MyTextArea = styled(TextArea)`
  grid-column: 2/14;
  grid-row: 3/10;

  @media only screen and (max-width: 600px) {
    grid-column: 2/14;
    grid-row: 2/8;
  }
`;

export const Wrapper = styled.section`
  ${fullWidthModal}
  z-index: 150;

  @media only screen and (max-width: 600px) {
    left: 0px;
  }
`;

export const Close = styled(CloseButton)`
  grid-column: 14/15;
  grid-row: 1/3;

  @media only screen and (max-width: 600px) {
    grid-column: 13/15;
    grid-row: 1/2;
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

function AddForm({ setShowForm }) {
  const dispatch = useDispatch();
  const newCardId = useSelector(cardIdSelector);
  const formRef = useRef({});

  const handleClose = () => {
    setShowForm(null);
    dispatch(deselectTodo());
  };

  const handleSubmit = () => {
    const { description, dueDate } = formRef.current;

    if (description?.length > 0) {
      dispatch(
        addTodo(
          newCardId,
          description,
          dueDate ? dueDate : defaultDate,
          defaultDate
        )
      );
    }

    handleClose();
  };

  return (
    <Wrapper>
      <Form formRef={formRef}>
        <Close handleClick={handleClose}>X</Close>
        <MyTextArea
          autoFocus
          name="description"
          placeholder="Definetion of done..."
          value=""
        />
        <MyDate
          defaultValue={defaultDate}
          name="dueDate"
          validation={isFutureDate}
        />
        <Submit
          backgroundColor="#6a82fb"
          handleClick={handleSubmit}
          type="submit"
        >
          Add
        </Submit>
      </Form>
    </Wrapper>
  );
}

export default React.memo(AddForm);
