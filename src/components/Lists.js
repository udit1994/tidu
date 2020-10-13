import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";

import { changeStatus } from "actions/todo";
import { listSelector } from "selectors/listSelector";
import ListHeader from "./ListHeader";
import Todo from "./Todo";

const Container = styled.section`
  border-radius: 20px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  height: 100%;
  margin-left: 5px;
  margin-right: 5px;
  opacity: ${(props) => (props.showForm ? "0.5" : "1")};
  overflow: auto;
  width: 350px;
  -webkit-box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 600px) {
    box-shadow: none;
    margin: 0;
    width: calc(100% - 6px);
  }
`;

const hideScrollbar = () => <div />;

function Lists({ listIds, setshowForm, showForm }) {
  const dispatch = useDispatch();
  const listData = useSelector(listSelector);
  const [dragCard, setDragCard] = useState(null);
  const [newDragList, setNewDragList] = useState(null);

  const handleDragEnter = (id, e) => {
    e.preventDefault();

    setNewDragList(id);
  };

  const handleDragEnd = () => dispatch(changeStatus(newDragList, ...dragCard));

  return listIds.map((id, index) => (
    <Container
      key={id}
      onDragEnd={handleDragEnd}
      onDragEnter={(e) => handleDragEnter(id, e)}
      onDragOver={(e) => e.preventDefault()}
      showForm={showForm}
    >
      <Scrollbars
        renderTrackHorizontal={hideScrollbar}
        renderTrackVertical={hideScrollbar}
      >
        <ListHeader id={id} index={index}>
          {listData[id].title}
        </ListHeader>
        {listData[id].cards.map((todoId) => (
          <Todo
            key={todoId}
            setDragCard={setDragCard}
            setshowForm={setshowForm}
            todoId={todoId}
          />
        ))}
      </Scrollbars>
    </Container>
  ));
}

export default React.memo(Lists);
