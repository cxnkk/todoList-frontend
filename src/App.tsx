import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="box-border rounded-md size-80 text-center border-4 bg-amber-500 p-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p
            className={`ms-2 text-l font-medium text-gray-900 dark:text-black ${
              checked ? "line-through text-gray-500" : ""
            }`}
          >
            To do 1
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
