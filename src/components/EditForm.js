import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useRef } from "react";
import styled from "styled-components";

import { deleteTodo, deselectTodo, updateTodo } from "actions/todo";
import { cardInfoSelector } from "selectors/cardSelector";
import { listSelector } from "selectors/listSelector";

import { Close, MyDate, MyTextArea, Submit, Wrapper } from "components/AddForm";
import { isFutureDate } from "utils/date";
import Button from "components/Button";
import Form from "components/Form";
import Select from "components/Select";

const Delete = styled(Button)`
  background-color: ${(props) => props.backgroundColor};
  grid-column: 9/11;
  grid-row: 13/14;

  @media only screen and (max-width: 600px) {
    grid-column: 7/10;
    grid-row: 12/14;
  }
`;

const Status = styled(Select)`
  grid-column: 8/12;
  grid-row: 11/12;

  @media only screen and (max-width: 600px) {
    grid-column: 8/12;
    grid-row: 10/11;
  }
`;

function EditForm({ setShowForm }) {
  const dispatch = useDispatch();
  const cardData = useSelector(cardInfoSelector);
  const listData = useSelector(listSelector);
  const formRef = useRef({});

  const {
    belongsTo,
    description: oldDescription,
    dueDate: oldDueDate,
    id,
  } = cardData;

  const handleClose = () => {
    setShowForm(null);
    dispatch(deselectTodo());
  };

  const handleDeleteCard = () => {
    dispatch(deleteTodo(id, belongsTo));

    handleClose();
  };

  const handleSubmit = () => {
    const { description, dueDate, newBelongsTo } = formRef.current;

    if (description?.length !== 0) {
      dispatch(
        updateTodo(
          id,
          description ? description : oldDescription,
          dueDate ? dueDate : oldDueDate,
          newBelongsTo ? newBelongsTo : belongsTo,
          belongsTo
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
          defaultValue={oldDescription}
          name="description"
          placeholder="Definetion of done..."
        />
        <MyDate
          defaultValue={oldDueDate}
          name="dueDate"
          validation={isFutureDate}
        />
        <Status defaultValue={belongsTo} name="newBelongsTo">
          {Object.values(listData).reduce((acc, data, index) => {
            if (data.id) {
              acc.push(
                <option key={index} value={data.id}>
                  {data.title}
                </option>
              );
            }

            return acc;
          }, [])}
        </Status>
        <Delete onClick={handleDeleteCard} backgroundColor="red">
          Delete
        </Delete>
        <Submit
          backgroundColor="#6a82fb"
          handleClick={handleSubmit}
          type="submit"
        >
          Update
        </Submit>
      </Form>
    </Wrapper>
  );
}

export default React.memo(EditForm);
