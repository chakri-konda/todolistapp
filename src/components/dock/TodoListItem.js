import "./TodoListItem.css";
import { BiTrash } from "react-icons/bi";
import { AiOutlineSave } from "react-icons/ai";
import Card from "../UI/Card";

const TodoListItem = (props) => {
  const deleteTodoListHandler = (event) => {
    props.onDeleteTodoList(props.lid);
  };

  const activeListHandler = (event) => {
    props.onActiveList(props.lid);
  };

  return (
    <li className="todo-list-cover">
      <Card
        borderRadius={"5px"}
        backgroundColor={`${props.activeLID === props.lid ? "#91bfff" : ""}`}
      >
        <div id="todo-list-bundle">
          <div className="todo-list-items-content" onClick={activeListHandler}>
            <div className="todo-list-title">{props.title}</div>
            <div className="todo-list-time-container">
              <AiOutlineSave size={12} />
              <div className="todo-list-time">{props.lastUpdated}</div>
            </div>
          </div>
          <button
            id="todo-list-delete-btn"
            style={{
              color: `${props.activeLID === props.lid ? "#0e1c2f" : ""}`,
            }}
          >
            <BiTrash size={19} onClick={deleteTodoListHandler} />
          </button>
        </div>
      </Card>
    </li>
  );
};

export default TodoListItem;
