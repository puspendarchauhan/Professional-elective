import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Write a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
