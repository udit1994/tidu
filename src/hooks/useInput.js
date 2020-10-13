import { useState } from "react";

const useInput = (defaultValue, formRef, name, validationCallback) => {
  const [field, setField] = useState({
    data: defaultValue ? defaultValue : "",
    error: null,
  });

  const handleChange = (e) => {
    const { value } = e.target;

    if (validationCallback) {
      const validation = validationCallback(value);

      if (!validation.result) {
        setField((prevState) => ({
          ...prevState,
          error: validation.error,
        }));

        return;
      }
    }

    setField((val) => ({
      ...val,
      data: value,
      error: null,
    }));

    formRef.current[name] = value;
  };

  return [field, handleChange];
};

export default useInput;
