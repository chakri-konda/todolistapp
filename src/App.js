import "./App.css";
import { useState } from "react";

import BackgroundImg from "./UI/BackgroundImg";
import Dock from "./components/dock/Dock";
import TodosComp from "./components/todolist/TodosComp";

let autoIncListKey = 10;
let autoIncTodoKey = 100;
const DUMMY_LIST_DATA = {
  1: {
    lid: 1,
    title: "Saitama's Todo List",
    lastUpdated: new Date(2021, 5, 6),
    todoData: [
      {
        tid: 10,
        value: "Bring some groceries at DMart.",
        checked: true,
        lastUpdated: new Date(2021, 5, 6),
      },
      {
        tid: 11,
        value: "Beat some villains.",
        checked: false,
        lastUpdated: new Date(2021, 5, 6),
      },
    ],
  },
  2: {
    lid: 2,
    title: "Fubuki's todo List",
    lastUpdated: new Date(2020, 1, 3),
    todoData: [
      {
        tid: 12,
        value: "Meet Saitama and make him join the gang.",
        checked: false,
        lastUpdated: new Date(2020, 1, 3),
      },
      {
        tid: 13,
        value: "Go to Hero Organisaiton Building & Report cases.",
        checked: false,
        lastUpdated: new Date(2020, 1, 3),
      },
    ],
  },
  3: {
    lid: 3,
    title: "Goku's Todo List",
    lastUpdated: new Date(),
    todoData: [
      {
        tid: 14,
        value: "Train like there's no tommorow.",
        checked: false,
        lastUpdated: new Date(),
      },
      {
        tid: 15,
        value: "Train with Vegeta under Beerus 💪",
        checked: false,
        lastUpdated: new Date(),
      },
      {
        tid: 16,
        value: "Do a Million Sit Ups.",
        checked: false,
        lastUpdated: new Date(),
      },
    ],
  },
  4: {
    lid: 4,
    title: "Chakri's todo List",
    lastUpdated: new Date(),
    todoData: [
      {
        tid: 17,
        value: "Build a compelte Todo Web App",
        checked: false,
        lastUpdated: new Date(),
      },
      {
        tid: 18,
        value: "Drink 5 Ltrs. of Water!",
        checked: false,
        lastUpdated: new Date(),
      },
      {
        tid: 19,
        value: "Attend the meet on time @5:30PM",
        checked: false,
        lastUpdated: new Date(),
      },
    ],
  },
  5: {
    lid: 5,
    title: "Freeman's todo List",
    lastUpdated: new Date(2020, 11, 20),
    todoData: [],
  },
};

// const EMPTY_DUMMY_LIST_DATA = {};

function App() {
  let [activeLID, setActiveLID] = useState(-1);
  const [todoListData, editTodoListData] = useState(DUMMY_LIST_DATA);

  // manages the active todo list to be displayed
  const setActiveListHandler = (lid) => {
    setActiveLID(lid);
  };

  // List Data Handlers
  const onAddTodoListHandler = () => {
    editTodoListData((prevTodoListData) => {
      const newTodoList = {
        lid: autoIncListKey,
        title: "New Todo List",
        lastUpdated: new Date(),
        todoData: [],
      };
      const updatedTodoListData = {
        ...prevTodoListData,
        [autoIncListKey]: newTodoList,
      };

      return updatedTodoListData;
    });
    setActiveListHandler(autoIncListKey++);
  };
  const onDeleteTodoListHandler = (lid) => {
    editTodoListData((prevTodoList) => {
      const updatedTodoList = Object.assign({}, prevTodoList);
      delete updatedTodoList[lid];
      if (activeLID === lid) {
        activeLID = -1;
      }

      return updatedTodoList;
    });
  };

  // Todo Data Handlers
  const addTodoHandler = (todoText) => {
    const todoKey = ++autoIncTodoKey;
    const todoValue = {
      tid: todoKey,
      value: todoText,
      checked: false,
      lastUpdated: new Date(),
    };
    editTodoListData((prevTodoList) => {
      const updatedTodo = [...prevTodoList[activeLID].todoData, todoValue];

      const updatedTodoList = { ...prevTodoList };
      updatedTodoList[activeLID].todoData = updatedTodo;
      updatedTodoList[activeLID].lastUpdated = todoValue.lastUpdated;
      return updatedTodoList;
    });
  };
  const deleteTodoHandler = (tid) => {
    editTodoListData((prevTodoList) => {
      const updatedTodos = prevTodoList[activeLID].todoData.filter((todo) => {
        return todo.tid !== tid;
      });
      const updatedTodoList = { ...prevTodoList };

      updatedTodoList[activeLID].todoData = updatedTodos;
      return updatedTodoList;
    });
  };
  const editTodoHandler = (tid, checked, todoText) => {
    editTodoListData((prevTodoList) => {
      const lastUpdated = new Date();
      const updatedTodos = prevTodoList[activeLID].todoData.map((todo) => {
        if (todo.tid === tid) {
          if (checked !== undefined) todo.checked = checked;
          if (todoText !== undefined) {
            todo.value = todoText;
            todo.lastUpdated = lastUpdated;
            updatedTodoList[activeLID].lastUpdated = lastUpdated;
          }
        }
        return todo;
      });
      const updatedTodoList = { ...prevTodoList };

      updatedTodoList[activeLID].todoData = updatedTodos;
      return updatedTodoList;
    });
  };

  return (
    <BackgroundImg>
      <div className="flex body-container">
        <Dock
          activeLID={activeLID}
          todoListData={todoListData}
          addTodoList={onAddTodoListHandler}
          deleteTodoList={onDeleteTodoListHandler}
          activeList={setActiveListHandler}
        />
        {todoListData[activeLID] ? (
          <TodosComp
            todoData={todoListData[activeLID].todoData}
            title={todoListData[activeLID].title}
            deleteTodo={deleteTodoHandler}
            editTodo={editTodoHandler}
            addTodo={addTodoHandler}
          />
        ) : (
          ``
        )}
      </div>
    </BackgroundImg>
  );
}

export default App;
