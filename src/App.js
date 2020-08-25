// import React, { useState } from 'react';
// import Todo from "./components/Todo";
// function App() {

//   const [input, setInput] = useState("put something");

//   const [items, setItems] = useState([]);

//   function addItem(event) {

//     setItems(event => {
//       if (input !== "") {
//         return [...event, input];

//       }
//       else alert(" put something to show")
//       return [...event];

//     });
//     setInput("")

//   }


//   function removeItem(id) {
//     setItems(event => {
//       return event.filter((item, index) => {
//         return index !== id;
//       })
//     });
//   }






//   return (
//     <div className="todolist">
//       <div className="heading"><h1 className="title">To-Do List</h1></div>
//       <input
//         type="text"
//         value={input}
//         onChange={(event) => { setInput(event.target.value) }}
//       />

//       <button onClick={addItem}>Add</button>

//       <div className="items">
//         <ul>
//           {items.map((item, index) => (
//             <Todo
//               key={index}
//               id={index}
//               item={item}
//               onCheck={removeItem}
//               // onChange={modif}
//               // onCheck={modifyItem}
//               // onChange={(event) => { setUpdate(event.target.value, item.key) }}



//             />
//           )
//           )}

//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { text: "My First task", id: 0, isEdited: false },
    { text: "second task", id: 1, isEdited: false},
  ]);

  //add todo
  const addTodo = (event, newText) => {
    event.preventDefault();
    if (newText.trim() === "") {
      return alert("Enter a Valid Todo");
    }

    const newTodo = {
      text: newText,
      id: todos.length,
      isEdited: false,
    };

    setTodos([...todos, newTodo]);
    //reset the value
    setValue("");
  };

  //remove todo
  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  //edit Todo
  const editTodo = (id, newTodo) =>
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newTodo } : todo))
    );
  // setTodos(
  //   todos.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         text: newTodo,
  //         id: todo.id,
  //       };
  //     } else {
  //       return todo;
  //     }
  //   })
  // );

  // toggle Edited
  const onFocus = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEdited: true }
          : { ...todo, isEdited: false }
      )
    );
  // finish the edit mode
  const onBlur = () =>
    setTodos(todos.map((todo) => ({ ...todo, isEdited: false })));

  

  return (
    <div>
      <form className="add-todo-form">
        <h1>Todo-App</h1>
        <div className="input-container">
          <input
            // save the todo in value
            onChange={(event) => setValue(event.target.value)}
            value={value}
            type="text"
          />
          <button
            onClick={(e) => addTodo(e, value)}
            className="my-btn btn-primary"
          >
            ADD
          </button>
        </div>
      </form>

      <ul>
        {todos.map((el) => (
          <li key={el.id} className="todo-card">
            <input
              style={
                el.isEdited ? { boxShadow: "5px 3px 13px 5px #00000054" } : {}
              }
              onFocus={() => onFocus(el.id)}
              onBlur={() => onBlur()}
              readOnly={!el.isEdited}
              onChange={(event) => editTodo(el.id, event.target.value)}
              type="text"
              value={el.text}
            />
            <button
              onClick={() => removeTodo(el.id)}
              className="my-btn btn-danger"
            >
              Delete
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;