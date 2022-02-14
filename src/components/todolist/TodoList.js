import "./TodoList.css";

import Todo from "./Todo";

import { getTime } from "../../helpers";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.todoData.map((todo) => {
        return (
          <Todo
            key={todo.tid}
            tid={todo.tid}
            checked={todo.checked}
            lastUpdated={getTime(todo.lastUpdated)}
            onDeleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
          >
            {todo.value}
          </Todo>
        );
      })}
    </ul>
  );
};

export default TodoList;
