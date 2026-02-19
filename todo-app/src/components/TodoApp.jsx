import { useEffect, useMemo, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const STORAGE_KEY = "todos_hifi_v1";

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all"); // all | active | done
  const [query, setQuery] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter((t) => t.done).length;
    const active = total - done;
    return { total, active, done };
  }, [todos]);

  const visibleTodos = useMemo(() => {
    let list = [...todos];

    // filter
    if (filter === "active") list = list.filter((t) => !t.done);
    if (filter === "done") list = list.filter((t) => t.done);

    // search
    const q = query.trim().toLowerCase();
    if (q) list = list.filter((t) => t.text.toLowerCase().includes(q));

    // sorting: High -> Medium -> Low, active first
    const rank = { high: 3, medium: 2, low: 1 };
    list.sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      return (rank[b.priority] || 0) - (rank[a.priority] || 0);
    });

    return list;
  }, [todos, filter, query]);

  const addTodo = (text, priority = "low") => {
    const value = text.trim();
    if (!value) return;

    const newTodo = {
      id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()),
      text: value,
      done: false,
      priority, // low | medium | high
      createdAt: Date.now(),
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    const value = newText.trim();
    if (!value) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: value } : t))
    );
  };

  const changePriority = (id, priority) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, priority } : t))
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.done));
  };

  return (
    <div className="page">
      <div className="shell">
        <header className="header">
          <div>
            <h1 className="title">Hi-Fi Todo</h1>
            <p className="subtitle">
              {stats.active} active • {stats.done} done • {stats.total} total
            </p>
          </div>

          <div className="searchWrap">
            <input
              className="input"
              placeholder="Search todo..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        <section className="card">
          <TodoForm onAdd={addTodo} />

          <div className="toolbar">
            <div className="tabs">
              <button
                className={`tab ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`tab ${filter === "active" ? "active" : ""}`}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={`tab ${filter === "done" ? "active" : ""}`}
                onClick={() => setFilter("done")}
              >
                Completed
              </button>
            </div>

            <button className="danger" onClick={clearCompleted}>
              Clear completed
            </button>
          </div>

          <TodoList
            todos={visibleTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onPriority={changePriority}
          />

          {visibleTodos.length === 0 && (
            <div className="empty">
              <p>No todos found.</p>
            </div>
          )}
        </section>

        <footer className="footer">
          <span>Made with React + Vite</span>
        </footer>
      </div>
    </div>
  );
}
