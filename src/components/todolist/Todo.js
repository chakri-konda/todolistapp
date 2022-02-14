import "./Todo.css";

import { useState } from "react";

import { AiOutlineSave } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { TiPencil } from "react-icons/ti";
import { MdOutlineDownloadDone } from "react-icons/md";

const Todo = (props) => {
  let editedValue = props.children;
  const [contentEditable, setContentEditable] = useState("false");

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
        <div className="todo-context">
          <div
            className="todo-context-value"
            contentEditable={contentEditable}
            onInput={onContentChangeHandler}
            suppressContentEditableWarning={true}
          >
            {editedValue}
          </div>
          <div
            className="todo-context-time-container"
            style={{ display: `${contentEditable === "true" ? "none" : ""}` }}
          >
            <AiOutlineSave size={11} />
            <div className="todo-context-time">{props.lastUpdated}</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <label
          className="flex switch"
          style={{ display: `${props.checked ? "none" : ""}` }}
        >
          <input
            className="check-box"
            type="checkbox"
            onChange={onEditTodoHandler}
          />
          {contentEditable === "false" ? (
            <TiPencil className="pencil" size={19} />
          ) : (
            <MdOutlineDownloadDone className="pencil" size={19} />
          )}
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
