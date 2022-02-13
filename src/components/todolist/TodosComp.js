import "./TodosComp.css";

import Card from "../../UI/Card";
import Title from "./Title";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";

const TodosComp = (props) => {
  return (
    <div className="main-container">
      <Card>
        <div className="todos-container">
          <Title title={props.title} />
          <TodoList
            todoData={props.todoData}
            deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
            // updateTodo={updateTodoHandler}
          />
          <InputTodo addTodo={props.addTodo} />
        </div>
      </Card>
    </div>
  );
};

export default TodosComp;