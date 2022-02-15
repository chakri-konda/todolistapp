import "./TodoLists.css";

import TodoListItem from "./TodoListItem";

import { getTime } from "../helpers";

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
              title={todoList.title}
              lastUpdated={getTime(todoList.lastUpdated)}
              onDeleteTodoList={props.onDeleteTodoList}
              onActiveList={props.onActiveList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoLists;
