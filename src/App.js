import { useSelector } from "react-redux";
import React, { lazy, Suspense, useRef, useState } from "react";
import styled from "styled-components";

import { fullScreen } from "mixins";
import { listSelector } from "selectors/listSelector";
import { pseudoBackground } from "mixins";
import AddTodo from "components/AddTodo";
import Cursor from "components/Cursor";
import Guide from "components/Guide";
import Lists from "components/Lists";

const AddForm = lazy(() => import("components/AddForm"));
const EditForm = lazy(() => import("components/EditForm"));

const Wrapper = styled.section`
  ${fullScreen}
  justify-content: space-around;
  overflow-x: auto;
  padding: 20px 0;
  position: relative;
  min-width: 1336px;

  @media only screen and (max-width: 600px) {
    min-width: 0px;
    padding: 0px 0px 5px 0px;
  }

  ::before {
    ${pseudoBackground}
    border-color: red;
    border-radius: 5%/90%;
    left: 0;
    bottom: 0;
  }

  ::after {
    ${pseudoBackground}
    border-color: yellow;
    border-radius: 50%/90%;
    right: 0;
    top: 0;
  }
`;

function App() {
  const listData = useSelector(listSelector);

  const [listIndex, setListIndex] = useState(0);
  const [coords, setCoords] = useState({ x: 500, y: 500 });
  const [showForm, setshowForm] = useState(null);
  const [showGuide, setShowGuide] = useState(
    true && !localStorage.getItem("redux-state")
  );
  const oldX = useRef();

  const isSmallScreen = window.innerWidth <= 600;

  const handleMouseMove = (e) => {
    if (!e) {
      e = window.event;
    }

    e.persist();

    if (e.pageX && e.pageY) {
      setCoords({
        x: e.pageX,
        y: e.pageY,
      });
    } else if (e.clientX && e.clientY) {
      setCoords({
        x:
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft,
        y:
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop,
      });
    }
  };

  const handleTouchEnd = (e) => {
    if (oldX.current - e.changedTouches[0].pageX > 100) {
      setListIndex((listIndex) => (listIndex + 1) % 4);
    } else if (oldX.current - e.changedTouches[0].pageX < -100) {
      setListIndex((listIndex) => (listIndex === 0 ? 3 : (listIndex - 1) % 4));
    }
  };

  const handleTouchStart = (e) => {
    if (e.targetTouches.length === 1) {
      oldX.current = e.targetTouches[0].clientX;
    }
  };

  return (
    <Suspense fallback={<div />}>
      <Cursor coords={coords} />
      <Wrapper
        onMouseMove={handleMouseMove}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <Lists
          listIds={isSmallScreen ? [listIndex + 1] : listData.ids}
          setshowForm={setshowForm}
          showForm={showForm}
        />
        <AddTodo onClick={() => setshowForm("add")}>+</AddTodo>
        {showForm === "add" && <AddForm setShowForm={setshowForm} />}
        {showForm === "update" && <EditForm setShowForm={setshowForm} />}
        <Guide showGuide={showGuide} setShowGuide={setShowGuide} />
      </Wrapper>
    </Suspense>
  );
}

export default App;
