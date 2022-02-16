import "./AddTodoList.css";

import { useDispatch } from "react-redux";
import { todoListDataActions } from "../../store/data-slice";
import { BiAddToQueue } from "react-icons/bi";

const AddTodoList = (props) => {
  const dispatch = useDispatch();

  const onAddTodoListHandler = (event) => {
    dispatch(todoListDataActions.addTodoList());
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
