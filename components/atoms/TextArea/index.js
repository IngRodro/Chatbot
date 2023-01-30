import Textarea from "react-textarea-autosize";
import { useState } from "react";

function TextArea({ onChange, sendMsg }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    onChange(event.target);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      sendMsg(text);
    }
  };

  return (
    <Textarea
      value={text}
      onChange={handleChange}
      minRows={1}
      maxRows={6}
      onKeyDown={handleKeyDown}
    />
  );
}

export default TextArea;
