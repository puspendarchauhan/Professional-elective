export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        border: "1px solid #ccc",
        borderRadius: 10,
        marginTop: 10,
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.text}
        </span>
      </label>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
