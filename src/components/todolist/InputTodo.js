import "./InputTodo.css";

import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { todoListDataActions } from "../../store/data-slice";

const InputTodo = (props) => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todoText.trim().length === 0) {
      alert("Todo is empty!");
      return;
    }

    dispatch(todoListDataActions.addTodo({ lid: props.lid, todoText }));
    // props.onAddTodo(todoText);
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
