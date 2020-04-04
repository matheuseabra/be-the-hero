import { useState, useCallback } from "react";

const useInput = initialState => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);

  return [inputValue, handleInputChange];
};

export default useInput;
