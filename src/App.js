import React, { useState } from 'react';
import Todo from "./components/Todo";
function App() {

  const [input, setInput] = useState("put something");

  const [items, setItems] = useState([]);

  function addItem(event) {

    setItems(event => {
      if (input !== "") {
        return [...event, input];

      }
      else alert(" put something to show")
      return [...event];

    });
    setInput("")

  }


  function removeItem(id) {
    setItems(event => {
      return event.filter((item, index) => {
        return index !== id;
      })
    });
  }






  return (
    <div className="todolist">
      <div className="heading"><h1 className="title">To-Do List</h1></div>
      <input
        type="text"
        value={input}
        onChange={(event) => { setInput(event.target.value) }}
      />

      <button onClick={addItem}>Add</button>

      <div className="items">
        <ul>
          {items.map((item, index) => (
            <Todo
              key={index}
              id={index}
              item={item}
              onCheck={removeItem}
              // onChange={modif}
              // onCheck={modifyItem}
              // onChange={(event) => { setUpdate(event.target.value, item.key) }}
              


            />
          )
          )}

        </ul>
      </div>
    </div>
  );
}

export default App;