import "./TodoLists.css";

import TodoListItem from "./TodoListItem";

import { getTime } from "../helpers";

const TodoLists = (props) => {
  return (
    <div className="todo-lists-cover">
      <ul className="todo-lists">
        {props.todoListData.map((todoList) => {
          return (
            <TodoListItem
              activeLID={props.activeLID}
              key={todoList.lid}
              lid={todoList.lid}
              title={todoList.title}
              lastUpdated={getTime(todoList.lastUpdated)}
              onActiveList={props.onActiveList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoLists;
