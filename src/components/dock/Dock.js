import "./Dock.css";

import TodoLists from "./TodoLists";
import AddTodoList from "./AddTodoList";

const Dock = (props) => {
  const isEmptyTodoList = Object.keys(props.todoListData).length === 0;

  return (
    <div
      className={`${
        isEmptyTodoList ? "empty-dock-container" : "dock-container"
      }`}
    >
      <AddTodoList onAddTodoList={props.onAddTodoList} />
      <TodoLists
        activeLID={props.activeLID}
        todoListData={props.todoListData}
        onDeleteTodoList={props.onDeleteTodoList}
        onActiveList={props.onActiveList}
      />
    </div>
  );
};

export default Dock;
