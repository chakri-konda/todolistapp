export const EMPTY_DUMMY_LIST_DATA = {};

export const getNewListKey = (() => {
  let autoIncKey = 10;
  return () => {
    return autoIncKey++;
  };
})();

export const getNewTodoKey = (() => {
  let autoIntKey = 100;
  return () => {
    return autoIntKey++;
  };
})();

export const DUMMY_LIST_DATA = {
  1: {
    lid: 1,
    title: "Saitama's Todo List",
    lastUpdated: new Date(2021, 5, 6),
    todoData: {
      10: {
        tid: 10,
        value: "Bring some groceries at DMart.",
        checked: true,
        lastUpdated: new Date(2021, 5, 6),
      },
      11: {
        tid: 11,
        value: "Beat some villains.",
        checked: false,
        lastUpdated: new Date(2021, 5, 6),
      },
    },
  },
  2: {
    lid: 2,
    title: "Fubuki's todo List",
    lastUpdated: new Date(2020, 1, 3),
    todoData: [
      {
        tid: 12,
        value: "Warn Saitama to join the gang.",
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

const ISTOffset = 330;

const getIST = (date) => {
  const timeOffset = date.getTimezoneOffset();
  return new Date(date.getTime() + (ISTOffset + timeOffset) * 60000);
};

const isToday = (cdate) => {
  const today = getIST(new Date());
  const date = new Date(cdate);

  return date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
};

export const getTime = (cdate) => {
  const date = new Date(Date.parse(cdate));

  if (isToday(date)) {
    let hours = date.getHours();
    let mins = date.getMinutes();
    let merid = hours < 12 ? " AM" : " PM";

    if (hours > 12) hours -= 12;

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    return hours + ":" + mins + merid;
  } else {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return day + "/" + month + "/" + year;
  }
};
