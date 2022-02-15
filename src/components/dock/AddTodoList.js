import { BiAddToQueue } from "react-icons/bi";

import "./AddTodoList.css";

const AddTodoList = (props) => {
  const onAddTodoListHandler = (event) => {
    props.onAddTodoList();
  };

  return (
    <div className="add-todo-list-btn-container">
      <button className="add-todo-list-btn" onClick={onAddTodoListHandler}>
        <BiAddToQueue size={21} />
      </button>
    </div>
  );
};

export default AddTodoList;
