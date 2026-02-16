import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: "center", marginTop: 20 }}>No todos yet.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: 15 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
