import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{ id: 1, text: "", checked: false }]);

  const handleKeyUp = (event: any, id: number) => {
    const currentTodo = todos.find((todo) => todo.id === id);

    if (event.key === "Enter" && currentTodo?.text.trim() !== "") {
      setTodos([...todos, { id: todos.length + 1, text: "", checked: false }]);
    }
  };

  const toggleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleTextChange = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="box-border rounded-md size-80 text-center border-4 bg-amber-500 p-4">
        {todos.map((todo) => (
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
              checked={todo.checked}
              onChange={() => toggleCheck(todo.id)}
            />
            <input
              type="text"
              className={`shadow appearance-none border rounded w-full py-1 px-1 ms-2 text-l font-medium text-gray-900 dark:text-black ${
                todo.checked ? "line-through text-gray-500" : ""
              }`}
              value={todo.text}
              onChange={(e) => handleTextChange(todo.id, e.target.value)}
              onKeyUp={(e) => handleKeyUp(e, todo.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
