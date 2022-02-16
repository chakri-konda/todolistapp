import "./Dock.css";

import TodoLists from "./TodoLists";
import AddTodoList from "./AddTodoList";

import { useSelector } from "react-redux";

const Dock = (props) => {
  const todoListDataRaw = useSelector((state) => state.todoListData);
  const todoListData = Object.values(todoListDataRaw);

  const isEmptyTodoList = todoListData.length === 0;

  return (
    <div
      className={`${
        isEmptyTodoList ? "empty-dock-container" : "dock-container"
      }`}
    >
      <AddTodoList />
      <TodoLists
        todoListData={todoListData}
        activeLID={props.activeLID}
        onActiveList={props.onActiveList}
      />
    </div>
  );
};

export default Dock;
