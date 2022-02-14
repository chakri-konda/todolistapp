const ISTOffset = 330;

const getIST = (date) => {
  const timeOffset = date.getTimezoneOffset();
  return new Date(date.getTime() + (ISTOffset + timeOffset) * 60000);
};

export const isToday = (cdate) => {
  const today = getIST(new Date());
  const date = new Date(cdate);

  return date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
};

export const getTime = (cdate) => {
  const date = new Date(cdate);
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
