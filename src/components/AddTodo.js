import styled from "styled-components";

const AddTodo = styled.button`
  align-items: center;
  background-color: green;
  border-radius: 50%;
  border: 0;
  bottom: 20px;
  color: white;
  display: flex;
  height: 25px;
  justify-content: center;
  line-height: 1;
  opacity: 0.9;
  outline: 0;
  padding: 0;
  position: fixed;
  right: 20px;
  transform-origin: 50% 50%;
  transform: scale(2);
  width: 25px;
  z-index: 0;

  @media (hover: hover) and (pointer: fine) {
    ::after {
      background-color: green;
      border-radius: 50px;
      bottom: -10px;
      content: "";
      height: 50px;
      left: -10px;
      opacity: 0.7;
      position: absolute;
      transform-origin: 50% 50%;
      transform: scale(0);
      transition: all 0.1s linear;
      width: 50px;
    }

    :hover {
      ::after {
        transform: scale(3);
      }
    }
  }
`;

export default AddTodo;
