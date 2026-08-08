import { useState } from "react";

export default function useInput() {
  const [input, setInupt] = useState();

  const onChange = (e) => {
    setInupt(e.target.value);
  };

  return [input, onChange];
}
