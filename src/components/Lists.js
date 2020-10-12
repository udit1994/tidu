import { useDispatch } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import styled from "styled-components";

import { listSelector } from "selectors/listSelector";
import ListHeader from "./ListHeader";
import Todo from "./Todo";
import { changeStatus } from "actions/todo";

const Container = styled.section`
  border-radius: 20px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
  height: 100%;
  margin-left: 5px;
  margin-right: 5px;
  width: 350px;
  -moz-box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.75);
  overflow: auto;
  opacity: ${(props) => (props.showForm ? "0.5" : "1")};

  @media only screen and (max-width: 600px) {
    box-shadow: none;
    margin: 0;
    width: calc(100% - 6px);
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
`;

const hideScrollbar = () => <div />;

function Lists({ listIds, setshowForm, showGuide, showForm }) {
  const dispatch = useDispatch();

  const listData = useSelector(listSelector);
  const [dragCard, setDragCard] = useState(null);
  const [newDragList, setNewDragList] = useState(null);

  const handleDragEnter = (id, e) => {
    e.preventDefault();

    setNewDragList(id);
  };

  const handleOnDragEnd = () =>
    dispatch(changeStatus(newDragList, ...dragCard));

  return listIds.map((id, index) => (
    <Container
      key={id}
      onDragEnd={handleOnDragEnd}
      onDragEnter={(e) => handleDragEnter(id, e)}
      onDragOver={(e) => e.preventDefault()}
      showForm={showForm}
    >
      <Scrollbars
        renderTrackHorizontal={hideScrollbar}
        renderTrackVertical={hideScrollbar}
      >
        <ListHeader id={id} index={index} showGuide={showGuide}>
          {listData[id].title}
        </ListHeader>
        {listData[id].cards.map((cardId) => (
          <Todo
            cardId={cardId}
            key={cardId}
            setDragCard={setDragCard}
            setshowForm={setshowForm}
          />
        ))}
      </Scrollbars>
    </Container>
  ));
}

export default React.memo(Lists);
