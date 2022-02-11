import { useState } from "react";
import "./App.css";

import Card from "./UI/Card";
import BackgroundImg from "./UI/BackgroundImg";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import InputTodo from "./components/InputTodo";

let autoIncKey = 0;

function App() {
  const [todoData, editTodoDataState] = useState([]);

  const addTodoHandler = (todoText, checked = false) => {
    editTodoDataState((prevTodo) => {
      const todoKey = (++autoIncKey).toString();
      const todoValue = { value: todoText, key: todoKey, done: checked };
      const updatedTodoList = [...prevTodo, todoValue];

      // window.localStorage.setItem(todoKey, JSON.stringify(todoValue));
      return updatedTodoList;
    });
  };

  const deleteTodoHandler = (id) => {
    editTodoDataState((prevTodo) => {
      const updatedTodoList = prevTodo.filter((todo) => {
        return todo.key !== id;
      });

      // window.localStorage.removeItem(id);
      return updatedTodoList;
    });
  };

  const editTodoHandler = (id, checked, todoText) => {
    editTodoDataState((prevTodo) => {
      const updatedTodoList = prevTodo.map((todo) => {
        if (todo.key === id) {
          if (checked !== undefined) todo.done = checked;
          if (todoText !== undefined) todo.value = todoText;
        }
        return todo;
      });

      return updatedTodoList;
    });
  };

  // const updateTodoHandler = (id) => {
  //   editTodoData((prevTodo) => {
  //     const todoData = JSON.parse(window.localStorage.getItem(id));
  //     todoData.checked ^= 1;
  //     const updatedTodoList = [
  //       prevTodo.filter((todo) => {
  //         return todo.key !== id;
  //       }),
  //       todoData,
  //     ];

  //     window.localStorage.setItem(id, JSON.stringify(todoData));
  //     return updatedTodoList;
  //   });
  // };

  // useEffect(() => {
  //   const prevKeys = Object.keys(localStorage);
  //   // if (prevKeys.length === 0) return;
  //   prevKeys.sort();

  //   for (const id of prevKeys) {
  //     const todo = JSON.parse(localStorage.getItem(id));
  //     window.localStorage.removeItem(id);
  //     addTodoHandler(todo["value"], todo["done"]);
  //   }
  // }, []);

  return (
    <BackgroundImg>
      <Card>
        <div className="main-container">
          <Title />
          <TodoList
            todoData={todoData}
            deleteTodo={deleteTodoHandler}
            editTodo={editTodoHandler}
            // updateTodo={updateTodoHandler}
          />
          <InputTodo onAdd={addTodoHandler} />
        </div>
      </Card>
    </BackgroundImg>
  );
}

export default App;
