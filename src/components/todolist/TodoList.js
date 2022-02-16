import "./TodoList.css";

import Todo from "./Todo";

import { getTime } from "../helpers";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.todoData.map((todo) => {
        return (
          <Todo
            lid={props.lid}
            key={todo.tid}
            tid={todo.tid}
            checked={todo.checked}
            lastUpdated={getTime(todo.lastUpdated)}
            onDeleteTodo={props.onDeleteTodo}
            onEditTodo={props.onEditTodo}
          >
            {todo.value}
          </Todo>
        );
      })}
    </ul>
  );
};

export default TodoList;
