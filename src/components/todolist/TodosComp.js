import "./TodosComp.css";

import Card from "../UI/Card";
import Title from "./Title";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import EmptyList from "./EmptyList";

const TodosComp = (props) => {
  const isTodoDataEmpty = props.todoData.length === 0;

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
          {isTodoDataEmpty ? (
            <EmptyList />
          ) : (
            <TodoList
              todoData={props.todoData}
              onDeleteTodo={props.onDeleteTodo}
              onEditTodo={props.onEditTodo}
            />
          )}
          <InputTodo onAddTodo={props.onAddTodo} />
        </div>
      </Card>
    </div>
  );
};

export default TodosComp;
