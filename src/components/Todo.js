import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React from "react";
import styled from "styled-components";

import { cardSelector } from "selectors/cardSelector";
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
  padding: 5px 10px 10px;
  margin: 0px;
  overflow: hidden;
  text-justify: auto;

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

function Todo({ cardId, setDragCard, setshowForm }) {
  const dispatch = useDispatch();
  const cardData = useSelector(cardSelector);

  const { belongsTo, description, dueDate, startDate } = cardData[cardId];

  const handleDoubleClick = (e) => {
    dispatch(selectTodo(cardId));

    setshowForm("update");
  };

  const handleOnDragStart = () => setDragCard([cardId, belongsTo]);

  return (
    <Wrapper
      color={colors[cardId % colors.length]}
      draggable="true"
      onDoubleClick={handleDoubleClick}
      onDragStart={handleOnDragStart}
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
