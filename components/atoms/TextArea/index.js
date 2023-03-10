import Textarea from "react-textarea-autosize";

function TextArea({ onChange, sendMsg, value }) {
  const handleChange = (event) => {
    onChange(event.target, event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      sendMsg(event.target.value);
    }
  };

  return (
    <Textarea
      value={value}
      onChange={handleChange}
      minRows={1}
      maxRows={3}
      onKeyDown={handleKeyDown}
    />
  );
}

export default TextArea;
