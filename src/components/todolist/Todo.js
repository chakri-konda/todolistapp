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
    // if content is marked checked, editing is denied
    if (props.checked) return;

    if (event.target.checked) setContentEditable("true");
    else {
      editedValue = editedValue.trim();
      if (props.children !== editedValue) {
        if (editedValue.length === 0) {
          onDeleteTodoHandler();
          return;
        } else {
          props.editTodo(props.tid, props.checked, editedValue);
        }
      }
      setContentEditable("false");
    }
  };

  const onContentChangeHandler = (event) => {
    editedValue = event.target.textContent;
  };

  const onCheckTodoHandler = (event) => {
    props.editTodo(props.tid, props.checked ? false : true);
  };

  return (
    <li className="todo">
      <div className="flex">
        <input
          type="checkbox"
          defaultChecked={props.checked}
          onChange={onCheckTodoHandler}
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
