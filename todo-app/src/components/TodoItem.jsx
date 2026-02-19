import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onEdit, onPriority }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const save = () => {
    onEdit(todo.id, draft);
    setIsEditing(false);
  };

  const badgeClass =
    todo.priority === "high"
      ? "badge high"
      : todo.priority === "medium"
      ? "badge medium"
      : "badge low";

  return (
    <div className={`item ${todo.done ? "done" : ""}`}>
      <button className="check" onClick={() => onToggle(todo.id)} aria-label="toggle">
        {todo.done ? "✓" : ""}
      </button>

      <div className="content">
        <div className="topRow">
          {isEditing ? (
            <input
              className="editInput"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") save();
                if (e.key === "Escape") {
                  setDraft(todo.text);
                  setIsEditing(false);
                }
              }}
              autoFocus
            />
          ) : (
            <p className="text">{todo.text}</p>
          )}

          <span className={badgeClass}>
            {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
          </span>
        </div>

        <div className="actions">
          <select
            className="miniSelect"
            value={todo.priority}
            onChange={(e) => onPriority(todo.id, e.target.value)}
            disabled={todo.done}
            title="Priority"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {isEditing ? (
            <>
              <button className="ghost" onClick={save}>
                Save
              </button>
              <button
                className="ghost"
                onClick={() => {
                  setDraft(todo.text);
                  setIsEditing(false);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button className="ghost" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}

          <button className="ghost dangerText" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
