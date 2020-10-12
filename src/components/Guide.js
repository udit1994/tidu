import React from "react";
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
      <Article>content</Article>
    </Wrapper>
  ) : null;
}

export default Guide;
