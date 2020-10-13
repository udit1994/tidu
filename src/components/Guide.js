import React from "react";
import styled from "styled-components";

import { modal, fullScreen } from "mixins";

const Wrapper = styled.section`
  ${fullScreen}
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

const Article = styled.article`
  ${modal}
  background-color: #fefff7;
  background-size: 300% 300%;
  border-radius: 15px;
  color: black;
  padding: 10px;
  position: relative;
  z-index: 200;
`;

const headingStyle = { textAlign: "center", textDecoration: "underline" };

function Guide({ showGuide, setShowGuide }) {
  return showGuide ? (
    <Wrapper onClick={() => setShowGuide(false)}>
      <Article>
        <h1 style={headingStyle}>Features</h1>
        <dl>
          <dt>Serverless</dt>
          <dd>
            Your data is never transferred over the internet and stays with you
            locally.
          </dd>
          <dt>Progressive Web App</dt>
          <dd>Works without the internet.</dd>
          <dd>You can install it as an app in your phone/computer.</dd>
          <dt>Highly performant</dt>
        </dl>
        <h1 style={headingStyle}>Usage</h1>
        <ul>
          <li>Double click headings to rename them.</li>
          <li>Drag todos to change there status.</li>
          <li>Double click todos to edit them.</li>
        </ul>
      </Article>
    </Wrapper>
  ) : null;
}

export default Guide;
