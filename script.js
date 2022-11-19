const datetime = document.getElementById("datetime");
const submit = document.getElementById("submit");
const needTime = document.getElementById("needTime");
const sectionShowTime = document.querySelector(".showTime");
const sectionTakeTime = document.querySelector(".takeTime");
const body = document.querySelector("body");

//Local Time
const nowTime = addHoursToDate(new Date(), 1);
const nowIndianTime =
  nowTime.getFullYear() +
  "-" +
  (nowTime.getMonth() + 1) +
  "-" +
  nowTime.getDate() +
  "T" +
  doublify(nowTime.getHours()) +
  ":" +
  doublify(nowTime.getMinutes()) +
  ":" +
  doublify(nowTime.getSeconds());
console.log(nowIndianTime);
datetime.value = nowIndianTime;

// COUNTER SHIT
submit.onclick = startClock;

function startClock() {
  setInterval(() => {
    const timeLeft = Date.parse(datetime.value) - Date.parse(new Date());
    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    timeLeftString =
      doublify(days) +
      " : " +
      doublify(hours) +
      " : " +
      doublify(minutes) +
      " : " +
      doublify(seconds);
    const i = 0;
    var color = ["black", "red"];
    if (timeLeft < 0) {
      body.style.backgroundColor = "red";
      timeLeftString = "Time up";
    }
    sectionShowTime.style.display = "flex";
    sectionTakeTime.style.display = "none";
    needTime.innerHTML = timeLeftString;
  }, 1000);
}

// SHIT I DONT UNDERSTAND
function doublify(n) {
  return n > 9 ? "" + n : "0" + n;
}

function addHoursToDate(objDate, intHours) {
  var numberOfMlSeconds = objDate.getTime();
  var addMlSeconds = intHours * 60 * 60 * 1000;
  var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

  return newDateObj;
}
