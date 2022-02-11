import "./TodoList.css";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.todoData.map((todo) => {
        return (
          <Todo
            checked={todo.done}
            key={todo.key}
            id={todo.key}
            onDeleteTodo={props.deleteTodo}
            onUpdateTodo={props.updateTodo}
          >
            {todo.value}
          </Todo>
        );
      })}
    </ul>
  );
};

export default TodoList;
