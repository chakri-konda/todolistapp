import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

import "./InputTodo.css";

const InputTodo = (props) => {
  const [todoText, setTodoText] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todoText.trim().length === 0) {
      alert("Todo is empty!");
      return;
    }
    props.onAdd(todoText);
    setTodoText("");
  };

  const todoChangeHandler = (event) => {
    setTodoText(event.target.value);
  };

  return (
    <form className="input-form" onSubmit={addTodoHandler}>
      <input
        type="text"
        className="todo-input"
        placeholder="notes.."
        value={todoText}
        onChange={todoChangeHandler}
      />
      <button className="submitBtn" type="submit">
        <BsPlusCircle size={23} />
      </button>
    </form>
  );
};

export default InputTodo;
