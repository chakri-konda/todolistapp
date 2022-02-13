import "./Todo.css";
import { BiTrash } from "react-icons/bi";
import { TiPencil } from "react-icons/ti";
import { useState } from "react";

const Todo = (props) => {
  let editedValue = props.children;
  const [contentEditableValue, setContentEditable] = useState("false");

  const onDeleteTodoHandler = (event) => {
    if (event !== undefined) event.preventDefault();
    props.onDeleteTodo(props.tid);
  };

  const onEditTodoHandler = (event) => {
    if (event.target.checked) setContentEditable("true");
    else {
      editedValue = editedValue.trim();
      if (props.children !== editedValue) {
        if (editedValue.length === 0) {
          onDeleteTodoHandler();
          return;
        } else {
          props.onEditTodo(props.tid, props.checked, editedValue);
          // pass new data, id
        }
      }
      setContentEditable("false");
    }
  };

  const onContentChangeHandler = (event) => {
    editedValue = event.target.textContent;
  };

  // const onUpdateTodoHandler = (event) => {
  //   event.preventDefault();
  //   props.onUpdateTodo(props.id);
  // };

  return (
    <li className="todo">
      <div className="flex">
        <input
          type="checkbox"
          // value={props.checked}
          // onChange={onUpdateTodoHandler}
        />
        <p
          className="todo-context"
          contentEditable={contentEditableValue}
          onInput={onContentChangeHandler}
          suppressContentEditableWarning={true}
        >
          {/* {props.children} */}
          {editedValue}
        </p>
      </div>
      <div className="flex">
        <label className="flex switch">
          <input
            className="check-box"
            type="checkbox"
            onChange={onEditTodoHandler}
          ></input>
          <TiPencil className="pencil" size={19} />
        </label>
        <button
          className="todo-mod-btn delete-btn"
          onClick={onDeleteTodoHandler}
        >
          <BiTrash size={19} />
        </button>
      </div>
    </li>
  );
};

export default Todo;