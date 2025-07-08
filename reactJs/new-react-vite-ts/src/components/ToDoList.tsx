import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "learn react", completed: true },
    { id: 2, text: "Go shopping", completed: false },
    { id: 3, text: "buy flowers", completed: false },
  ]);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="bg-neutral-800 p-6 rounded-xl shadow-md w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-cyan-300">Todo List</h1>

        {/* Danh sách Todo */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded"
            >
              <span
                className={`flex items-center gap-2 cursor-pointer ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "font-semibold text-cyan-300"
                }`}
                onClick={() => handleToggle(todo.id)}
              >
                <span>✔</span>
                <span>{todo.text}</span>
              </span>
              <button
                className="text-gray-500 hover:text-red-500"
                onClick={() => handleDelete(todo.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        {/* Thêm Todo mới */}
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full outline-none text-white bg-neutral-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <button
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-cyan-300 transition"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
