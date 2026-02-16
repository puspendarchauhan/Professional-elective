import { useEffect, useState } from "react";
import TodoForm from "./ToDoForm";
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
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
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
    <main className="container">
      <h2 className="title">Todo App ✅</h2>

      <TodoForm onAdd={addTodo} />

      <div className="actions">
        <button className="btn" onClick={clearDone}>
          Clear Done
        </button>
        <button className="btn danger" onClick={clearAll}>
          Clear All
        </button>
      </div>

      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </main>
  );
}
