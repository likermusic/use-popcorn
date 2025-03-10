import { useState } from "react";

export function useChangeInputValue(onSearch) {
  const [value, setValue] = useState("");

  function changeHandler(e) {
    setValue(e.target.value);
    onSearch(e.target.value);
  }

  return { value, changeHandler };
}
