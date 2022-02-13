import "./TodoLists.css";

import TodoListItem from "./TodoListItem";

const ISTOffset = 330;
const getIST = (date) => {
  const timeOffset = date.getTimezoneOffset();
  return new Date(date.getTime() + (ISTOffset + timeOffset) * 60000);
};

const isToday = (date) => {
  const today = getIST(new Date());
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const getTime = (date) => {
  if (isToday(date)) {
    let hours = date.getHours();
    let mins = date.getMinutes();
    let merid = hours < 12 ? "AM" : "PM";

    if (hours > 12) hours -= 12;

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    return hours + ":" + mins + " " + merid;
  }
  let day = date.getDate();
  if (day < 10) day = "0" + day;
  let month = date.getMonth();
  if (month < 10) month = "0" + month;
  const year = date.getFullYear();

  return day + "/" + month + "/" + year;
};

const TodoLists = (props) => {
  const todoListData = Object.values(props.todoListData);

  return (
    <div className="todo-lists-cover">
      <ul className="todo-lists">
        {todoListData.map((todoList) => {
          return (
            <TodoListItem
              activeLID={props.activeLID}
              key={todoList.lid}
              lid={todoList.lid}
              content={todoList.title}
              lastUpdated={getTime(todoList.lastUpdated)}
              deleteTodoList={props.deleteTodoList}
              activeList={props.activeList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoLists;
