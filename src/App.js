import "./App.css";
import { useEffect, useState } from "react";

import BackgroundImg from "./UI/BackgroundImg";
import Dock from "./components/dock/Dock";
import TodosComp from "./components/todolist/TodosComp";

let autoIncListKey = 10;
let autoIncTodoKey = 100;
let isStart = true;
let isStartA = true;
let DUMMY_ACTIVE = -1;

// const DUMMY_LIST_DATA = {
//   1: {
//     lid: 1,
//     title: "Saitama's Todo List",
//     lastUpdated: new Date(2021, 5, 6),
//     todoData: [
//       {
//         tid: 10,
//         value: "Bring some groceries at DMart.",
//         checked: true,
//         lastUpdated: new Date(2021, 5, 6),
//       },
//       {
//         tid: 11,
//         value: "Beat some villains.",
//         checked: false,
//         lastUpdated: new Date(2021, 5, 6),
//       },
//     ],
//   },
//   2: {
//     lid: 2,
//     title: "Fubuki's todo List",
//     lastUpdated: new Date(2020, 1, 3),
//     todoData: [
//       {
//         tid: 12,
//         value: "Meet Saitama and make him join the gang.",
//         checked: false,
//         lastUpdated: new Date(2020, 1, 3),
//       },
//       {
//         tid: 13,
//         value: "Go to Hero Organisaiton Building & Report cases.",
//         checked: false,
//         lastUpdated: new Date(2020, 1, 3),
//       },
//     ],
//   },
//   3: {
//     lid: 3,
//     title: "Goku's Todo List",
//     lastUpdated: new Date(),
//     todoData: [
//       {
//         tid: 14,
//         value: "Train like there's no tommorow.",
//         checked: false,
//         lastUpdated: new Date(),
//       },
//       {
//         tid: 15,
//         value: "Train with Vegeta under Beerus 💪",
//         checked: false,
//         lastUpdated: new Date(),
//       },
//       {
//         tid: 16,
//         value: "Do a Million Sit Ups.",
//         checked: false,
//         lastUpdated: new Date(),
//       },
//     ],
//   },
//   4: {
//     lid: 4,
//     title: "Chakri's todo List",
//     lastUpdated: new Date(),
//     todoData: [
//       {
//         tid: 17,
//         value: "Build a compelte Todo Web App",
//         checked: false,
//         lastUpdated: new Date(),
//       },
//       {
//         tid: 18,
//         value: "Drink 5 Ltrs. of Water!",
//         checked: false,
//         lastUpdated: new Date(),
//       },
//       {
//         tid: 19,
//         value: "Attend the meet on time @5:30PM",
//         checked: false,
//         lastUpdated: new Date(),
//       },
//     ],
//   },
//   5: {
//     lid: 5,
//     title: "Freeman's todo List",
//     lastUpdated: new Date(2020, 11, 20),
//     todoData: [],
//   },
// };

// const EMPTY_DUMMY_LIST_DATA = {};

function App() {
  let [activeLID, setActiveLID] = useState(DUMMY_ACTIVE);
  const [todoListData, editTodoListData] = useState({});

  // manages the active todo list to be displayed
  const setActiveListHandler = (lid = activeLID, setContentEditable) => {
    if (setContentEditable !== undefined) setContentEditable("false");
    setActiveLID(lid);
  };

  // List Data Handlers
  const onAddTodoListHandler = () => {
    // issue, inside edit +2, outside +1!
    const listKey = autoIncListKey++;
    localStorage.setItem("lid", autoIncListKey);
    editTodoListData((prevTodoLists) => {
      const newTodoList = {
        lid: listKey,
        title: "New Todo List",
        lastUpdated: new Date(),
        todoData: [],
      };
      const updatedTodoLists = {
        ...prevTodoLists,
        [listKey]: newTodoList,
      };

      setActiveListHandler(listKey);
      return updatedTodoLists;
    });
  };
  const onDeleteTodoListHandler = (lid) => {
    editTodoListData((prevTodoLists) => {
      const updatedTodoLists = { ...prevTodoLists };
      delete updatedTodoLists[lid];
      if (activeLID === lid) {
        activeLID = DUMMY_ACTIVE;
      }

      return updatedTodoLists;
    });
  };
  const onEditTitleHandler = (title) => {
    editTodoListData((prevTodoLists) => {
      const updatedTodoLists = { ...prevTodoLists };
      updatedTodoLists[activeLID].title = title;
      updatedTodoLists[activeLID].lastUpdated = new Date();
      return updatedTodoLists;
    });
  };

  // Todo Data Handlers
  const addTodoHandler = (todoText) => {
    const todoKey = autoIncTodoKey++;
    const todoValue = {
      tid: todoKey,
      value: todoText,
      checked: false,
      lastUpdated: new Date(),
    };
    localStorage.setItem("tid", autoIncTodoKey);
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
          }
        }
        return todo;
      });
      const updatedTodoList = { ...prevTodoList };

      // time is updated only for text based edit
      if (todoText !== undefined) {
        updatedTodoList[activeLID].lastUpdated = lastUpdated;
      }

      updatedTodoList[activeLID].todoData = updatedTodos;
      return updatedTodoList;
    });
  };

  // local storage Handlers
  useEffect(() => {
    if (isStart === true) {
      isStart = false;
      const rawTodoListData = localStorage.getItem("data");
      const storedTodoListData =
        rawTodoListData !== null ? JSON.parse(rawTodoListData) : {};

      const prevListKey = +localStorage.getItem("lid");
      if (prevListKey !== NaN) autoIncListKey = prevListKey;
      const prevTodoKey = +localStorage.getItem("tid");
      if (prevTodoKey !== NaN) autoIncTodoKey = prevTodoKey;

      editTodoListData(storedTodoListData);
    } else {
      localStorage.setItem("data", JSON.stringify(todoListData));
    }
  }, [todoListData]);

  useEffect(() => {
    if (isStartA === true) {
      isStartA = false;
      setActiveLID(+localStorage.getItem("active"));
    } else {
      localStorage.setItem("active", activeLID);
    }
  }, [activeLID]);

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
            lid={activeLID}
            todoData={todoListData[activeLID].todoData}
            title={todoListData[activeLID].title}
            deleteTodo={deleteTodoHandler}
            editTodo={editTodoHandler}
            addTodo={addTodoHandler}
            activeList={setActiveListHandler}
            editTitle={onEditTitleHandler}
          />
        ) : (
          ``
        )}
      </div>
    </BackgroundImg>
  );
}

export default App;
