import React from "react";

function Form({ children, formRef, className }) {
  return (
    <form className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { formRef })
      )}
    </form>
  );
}

export default Form;
