import "./App.css";

import { useState } from "react";

import BackgroundImg from "./components/UI/BackgroundImg";
import Dock from "./components/dock/Dock";
import TodosComp from "./components/todolist/TodosComp";

function App() {
  let [activeLID, setActiveLID] = useState(-1);

  const setActiveListHandler = (lid = activeLID) => {
    setActiveLID(lid);
  };

  return (
    <BackgroundImg>
      <div className="flex body-container">
        <Dock activeLID={activeLID} onActiveList={setActiveListHandler} />
        <TodosComp lid={activeLID} onSetActiveList={setActiveListHandler} />
      </div>
    </BackgroundImg>
  );
}

export default App;
