import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React from "react";
import styled from "styled-components";

import { todoSelector } from "selectors/todoSelector";
import { colors } from "constants/appConstants";
import { selectTodo } from "actions/todo";

const Wrapper = styled.article`
  background-color: ${(props) => props.color};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
  padding-bottom: 10px;
  position: ${(props) => (props.isDragging ? "static" : "static")};
`;

const Description = styled.pre`
  flex-grow: 2;
  margin: 0px;
  overflow: hidden;
  padding: 5px 10px 10px;
  text-justify: auto;
  white-space: pre-wrap;

  ::first-letter {
    text-transform: capitalize;
  }
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 10px;
  position: relative;
  width: 100%;
`;

function Todo({ todoId, setDragTodo, setshowForm }) {
  const dispatch = useDispatch();
  const todoInfo = useSelector(todoSelector);

  const { description, dueDate, startDate, status } = todoInfo[todoId];

  const handleDoubleClick = () => {
    dispatch(selectTodo(todoId));

    setshowForm("update");
  };

  const handleDragStart = () => setDragTodo([todoId, status]);

  return (
    <Wrapper
      color={colors[todoId % colors.length]}
      draggable="true"
      onDoubleClick={handleDoubleClick}
      onDragStart={handleDragStart}
    >
      <Description>{description}</Description>
      <Footer>
        <time>Added: {startDate}</time>
        <time>Due: {dueDate}</time>
      </Footer>
    </Wrapper>
  );
}

export default React.memo(Todo);
