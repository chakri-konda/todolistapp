import "./TodoList.css";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.todoData.map((todo) => {
        return (
          <Todo
            key={todo.tid}
            tid={todo.tid}
            checked={todo.checked}
            onDeleteTodo={props.deleteTodo}
            onEditTodo={props.editTodo}
            // onUpdateTodo={props.updateTodo}
          >
            {todo.value}
          </Todo>
        );
      })}
    </ul>
  );
};

export default TodoList;
