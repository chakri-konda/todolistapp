import "./TodoListItem.css";
import { BiTrash } from "react-icons/bi";
import { AiOutlineSave } from "react-icons/ai";
import Card from "../../UI/Card";

const TodoListItem = (props) => {
  const onDeleteTodoListHandler = (event) => {
    event.preventDefault();
    props.deleteTodoList(props.lid);
  };

  const onActivateListHandler = (event) => {
    event.preventDefault();
    props.activeList(props.lid);
  };

  return (
    <li className="todo-list-cover">
      <Card
        borderRadius={"5px"}
        backgroundColor={`${props.activeLID === props.lid ? "#87aade" : ""}`}
      >
        <div id="todo-list-bundle">
          <div
            className="todo-list-items-content"
            onClick={onActivateListHandler}
          >
            <div className="todo-list-title">{props.content}</div>
            <div className="todo-list-time-container">
              <AiOutlineSave size={12} />
              <div className="todo-list-time">{props.lastUpdated}</div>
            </div>
          </div>
          <button id="todo-list-delete-btn">
            <BiTrash size={19} onClick={onDeleteTodoListHandler} />
          </button>
        </div>
      </Card>
    </li>
  );
};

export default TodoListItem;
