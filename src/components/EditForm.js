import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useRef } from "react";
import styled from "styled-components";

import { todoInfoSelector } from "selectors/todoSelector";
import { deleteTodo, deSelectTodo, updateTodo } from "actions/todo";
import { isFutureDate } from "utils/date";
import { listSelector } from "selectors/listSelector";
import {
  Close,
  MyDate,
  MyForm,
  MyTextArea,
  Submit,
  Wrapper,
} from "components/AddForm";
import Button from "components/Button";
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
  const listData = useSelector(listSelector);
  const todoInfo = useSelector(todoInfoSelector);
  const formRef = useRef({});

  const {
    description: oldDescription,
    dueDate: oldDueDate,
    id,
    status,
  } = todoInfo;

  const handleClose = () => {
    dispatch(deSelectTodo());

    setShowForm(null);
  };

  const handleDeleteTodo = (e) => {
    dispatch(deleteTodo(id, status));

    handleClose();
  };

  const handleSubmit = () => {
    const { description, dueDate, newStatus } = formRef.current;

    if (description?.length !== 0) {
      dispatch(
        updateTodo(
          id,
          description ? description : oldDescription,
          dueDate ? dueDate : oldDueDate,
          newStatus ? newStatus : status,
          status
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
          defaultValue={oldDescription}
          name="description"
          placeholder="Definetion of done..."
        />
        <MyDate
          defaultValue={oldDueDate}
          name="dueDate"
          validationCallback={validationCallback}
        />
        <Status defaultValue={status} name="newStatus">
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
        <Delete
          handleClick={handleDeleteTodo}
          backgroundColor="red"
          type="submit"
        >
          Delete
        </Delete>
        <Submit
          backgroundColor="#6a82fb"
          handleClick={handleSubmit}
          type="submit"
        >
          Update
        </Submit>
      </MyForm>
    </Wrapper>
  );
}

export default React.memo(EditForm);
