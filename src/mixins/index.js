export const fullScreen = () => `
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const modal = () => `
  background-color: #fefff7;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  height: 300px;
  opacity: 1;
  width: 600px;
  z-index: 200;

  @media only screen and (max-width: 600px) {
    height: 300px;
  }
`;

export const pseudoBackground = () => `
  border-radius: 10px;
  border: 8px solid;
  content: "";
  height: 400px;
  opacity: 0.5;
  position: fixed;
  transform: rotate(45deg);
  width: 400px;
  z-index: -1;
`;

export const InputStyle = () => `
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border-image: none;
  border-radius: 10px;
  border-style: none solid solid none;
  border-width: medium 0px 0px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  transition: background-color 0.2s ease 0s;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;

  &:focus {
    background: none repeat scroll 0 0 #ffffff;
    outline-width: 0;
  }
`;
