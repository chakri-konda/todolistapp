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
      <AddTodoList
        isTodoListEmpty={isEmptyTodoList}
        addTodoList={props.addTodoList}
      />
      <TodoLists
        activeLID={props.activeLID}
        todoListData={props.todoListData}
        deleteTodoList={props.deleteTodoList}
        activeList={props.activeList}
      />
    </div>
  );
};

export default Dock;
