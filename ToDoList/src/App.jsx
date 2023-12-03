import { useState } from "react";
import "./App.css";
import TodoList from "./assets/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>To-do List</h3>
      <TodoList />
    </>
  );
}

export default App;
