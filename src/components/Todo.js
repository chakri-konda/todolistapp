import "./Todo.css";
import { BiTrash } from "react-icons/bi";

const Todo = (props) => {
  const onDeleteTodoHandler = (event) => {
    event.preventDefault();
    props.onDeleteTodo(props.id);
  };

  // const onUpdateTodoHandler = (event) => {
  //   event.preventDefault();
  //   props.onUpdateTodo(props.id);
  // };

  return (
    <li className="todo">
      <div className="todo-container">
        <input
          type="checkbox"
          // value={props.checked}
          // onChange={onUpdateTodoHandler}
        />
        <label className="todo-context">{props.children}</label>
      </div>
      <div>
        <button className="todo-delete" onClick={onDeleteTodoHandler}>
          <BiTrash size={19} />
        </button>
      </div>
    </li>
  );
};

export default Todo;
