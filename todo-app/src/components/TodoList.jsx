import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onEdit, onPriority }) {
  return (
    <div className="list">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onPriority={onPriority}
        />
      ))}
    </div>
  );
}
