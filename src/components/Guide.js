import React, { useEffect } from "react";
import styled from "styled-components";

import { fullWidthModal } from "mixins";

const Wrapper = styled.section`
  ${fullWidthModal}
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

const Article = styled.article`
  background-color: #fefff7;
  background-size: 300% 300%;
  border-radius: 15px;
  color: black;
  padding: 10px;
  position: relative;
  z-index: 200;
`;

function Guide({ showGuide, setShowGuide }) {
  return showGuide ? (
    <Wrapper onClick={() => setShowGuide(false)}>
      <Article>
        <h1 style={{ textAlign: "center" }}>Features</h1>
        <dl>
          <dt>Serverless</dt>
          <dd>
            Your data is never transferred over the internet and stays with you
            locally.
          </dd>
          <dt>Progressive Web App</dt>
          <dd>Works without internet.</dd>
          <dd>You can install it as an app in your phone/computer.</dd>
          <dt>Highly performant</dt>
        </dl>
      </Article>
    </Wrapper>
  ) : null;
}

export default Guide;
