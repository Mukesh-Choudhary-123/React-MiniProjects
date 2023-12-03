import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
const TodoList = () => {
  let [todos, setTodos] = useState([
    { task: "Sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  //event Object
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id != id));
  };

  let doneOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let allDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button className="add" onClick={addNewTask}>
        Add
      </button>
      <hr />
      <ol>
        {todos.map((todo) => (
          <li key={todo.id} className="list">
            <span
              className="tasklist"
              style={todo.isDone ? { textDecoration: "line-through" } : {}}
            >
              {todo.task}
            </span>

            <button className="del" onClick={() => deleteTodo(todo.id)}>
              delete
            </button>
            <button className="del up" onClick={() => doneOne(todo.id)}>
              Done !
            </button>
          </li>
        ))}
      </ol>
      {/* <button onClick={upperCase}>All_UpperCase</button> */}
      <button onClick={allDone}>All_Done !</button>
    </div>
  );
};

export default TodoList;
