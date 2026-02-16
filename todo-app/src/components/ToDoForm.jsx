import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a todo..."
        style={{ flex: 1, padding: 10 }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
