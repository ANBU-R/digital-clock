let time = new Date();
setHour(time);
setMinute(time);

setInterval(() => {
  time = new Date();
  document.querySelector(".second").textContent =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  setHourandMin(time);
}, 500);

function setHour(time) {
  hour = time.getHours();
  if (!(hour >= 1 && hour <= 12)) {
    hour = Math.abs(12 - hour);
    document.querySelector(".ampm").textContent = "PM";
  } else {
    document.querySelector(".ampm").textContent = "AM";
  }
  document.querySelector(".hour").textContent = hour < 10 ? "0" + hour : hour;
}

function setMinute(time) {
  document.querySelector(".minute").textContent =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
}

function setHourandMin(time) {
  if (time.getSeconds() == 0) {
    setMinute(time);
  }
  if (time.getMinutes() == 0) {
    setHour(time);
  }
}
