import "./Dock.css";

import TodoLists from "./TodoLists";
import AddTodoList from "./AddTodoList";

const Dock = (props) => {
  const isEmptyTodoList = Object.keys(props.todoListData).length === 0;

  console.log(isEmptyTodoList);
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
        todoListData={props.todoListData}
        deleteTodoList={props.deleteTodoList}
        activeList={props.activeList}
      />
    </div>
  );
};

export default Dock;
