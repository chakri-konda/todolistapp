import "./InputTodo.css";

import { useState } from "react";

import { AiOutlineAppstoreAdd } from "react-icons/ai";

const InputTodo = (props) => {
  const [todoText, setTodoText] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todoText.trim().length === 0) {
      alert("Todo is empty!");
      return;
    }

    props.onAddTodo(todoText);
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
        placeholder="Add some todo here.."
        value={todoText}
        onChange={todoChangeHandler}
      />
      <button className="submitBtn" type="submit">
        <AiOutlineAppstoreAdd size={19} />
      </button>
    </form>
  );
};

export default InputTodo;
