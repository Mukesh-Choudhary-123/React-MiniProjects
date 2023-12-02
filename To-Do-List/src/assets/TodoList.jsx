import React, { useState } from "react";
import TotalList from "./TotalList";
import "./TodoList.css";

const TodoList = () => {
  const [inputList, setinputList] = useState();
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const addItems = () => {
    setitems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };

  const deleteItem = (id) => {
    setitems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main">
      <div className="center_box">
        <br />
        <h1> ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Items"
          value={inputList}
          onChange={itemEvent}
        />
        <button className="Btn" onClick={addItems}>
          +
        </button>

        <ol>
          {/* <li>{inputList}</li> */}
          {items.map((itemValue, index) => {
            return (
              <TotalList
                text={itemValue}
                id={index}
                onSelect={deleteItem}
                key={index}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
