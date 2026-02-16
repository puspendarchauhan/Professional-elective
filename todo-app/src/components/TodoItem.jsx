export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="item">
      <label className="item-left">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.done ? "done" : ""}>{todo.text}</span>
      </label>

      <button className="btn danger" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}
