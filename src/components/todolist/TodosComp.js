import "./TodosComp.css";

import Card from "../UI/Card";
import Title from "./Title";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";

const TodosComp = (props) => {
  return (
    <div className="main-container">
      <Card>
        <div className="todos-container">
          <Title
            key={props.lid}
            onEditTitle={props.onEditTitle}
            onActiveList={props.onActiveList}
          >
            {props.title}
          </Title>
          <TodoList
            todoData={props.todoData}
            onDeleteTodo={props.onDeleteTodo}
            onEditTodo={props.onEditTodo}
          />
          <InputTodo onAddTodo={props.onAddTodo} />
        </div>
      </Card>
    </div>
  );
};

export default TodosComp;
