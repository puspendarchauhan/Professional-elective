import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const value = text.trim();
    if (!value) return;

    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id)); 
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    ); 
  };

  const clearAll = () => setTodos([]);
  const clearDone = () => setTodos((prev) => prev.filter((t) => !t.done));

  return (
    <main style={{ maxWidth: 520, margin: "40px auto" }}>
      <h2 style={{ textAlign: "center" }}>Todo App</h2>

      <TodoForm onAdd={addTodo} />

      <div style={{ display: "flex", gap: 10, margin: "12px 0" }}>
        <button onClick={clearDone}>Clear Done</button>
        <button onClick={clearAll}>Clear All</button>
      </div>

      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </main>
  );
}
