import "./TodoLists.css";

import TodoListItem from "./TodoListItem";

import { getTime } from "../../timeHelper";

const TodoLists = (props) => {
  const todoListData = Object.values(props.todoListData);

  return (
    <div className="todo-lists-cover">
      <ul className="todo-lists">
        {todoListData.map((todoList) => {
          return (
            <TodoListItem
              activeLID={props.activeLID}
              key={todoList.lid}
              lid={todoList.lid}
              content={todoList.title}
              lastUpdated={getTime(todoList.lastUpdated)}
              deleteTodoList={props.deleteTodoList}
              activeList={props.activeList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoLists;
