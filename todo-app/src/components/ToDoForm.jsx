import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");

  const submit = (e) => {
    e.preventDefault();
    onAdd(text, priority);
    setText("");
    setPriority("low");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a new task..."
      />

      <select
        className="select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className="primary" type="submit">
        Add
      </button>
    </form>
  );
}
