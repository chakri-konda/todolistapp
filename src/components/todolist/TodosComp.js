import "./TodosComp.css";

import Card from "../UI/Card";
import Title from "./Title";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import EmptyList from "./EmptyList";

import { useSelector } from "react-redux";

const TodosComp = (props) => {
  const todoListDataRaw = useSelector((state) => state.todoListData.data);
  const todoList = todoListDataRaw[props.lid];
  if (todoList === undefined) return ``;

  const todos = Object.values(todoList.todos);
  const isTodoDataEmpty = todos.length === 0;

  return (
    <div className="main-container">
      <Card>
        <div className="todos-container">
          <Title
            key={props.lid}
            lid={props.lid}
            onSetActiveList={props.onSetActiveList}
          >
            {todoList.title}
          </Title>
          {isTodoDataEmpty ? (
            <EmptyList />
          ) : (
            <TodoList lid={props.lid} todoData={todos} />
          )}
          <InputTodo lid={props.lid} />
        </div>
      </Card>
    </div>
  );
};

export default TodosComp;
