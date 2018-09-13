// buttons
const startButton = document.querySelector('.start'),
  stopButton = document.querySelector('.stop'),
  pauseButton = document.querySelector('.pause'),
  resetButton = document.querySelector('.reset');
// time constants
const secondInMinute = 60,
  minuteInHour = 60,
  hourInADay = 24;
// timer selectors
let second = document.querySelector('.second'),
  minute = document.querySelector('.minute'),
  hour = document.querySelector('.hour');
// initial values
let countSeconds = 0,
  countMinutes = 1,
  countHours = 1;

// add seconds, minutes, & hours
const addTime = (time, count) => {
  if (count < 10) {
    time.innerHTML = "0" + count;
  } else {
    time.innerHTML = count;
  }
}

startButton.addEventListener('click', () => {
  let timer = setInterval(() => {
    if (countSeconds < secondInMinute) {
      if (countMinutes == 0) {
        minute.innerHTML = "0" + countMinutes;
      }
      addTime(second, countSeconds);
      countSeconds++;
    } else if (countSeconds == secondInMinute) {
      countSeconds = 0;
      second.innerHTML = "0" + countSeconds;
      minute.innerHTML = "0" + countMinutes;
      addTime(second, countSeconds);
      addTime(minute, countMinutes);
      countSeconds++;
      countMinutes++;
    } else if (countMinutes == minuteInHour) {
      countMinutes = 0;
      minute.innerHTML = "0" + countMinutes;
      addTime(second, countSeconds);
      addTime(minute, countMinutes);
      addTime(hour, countHours);
      countSeconds++;
      countMinutes++;
      countHours++;
    } else if (countHours == hourInADay) {
      second.innerHTML = "00";
      minute.innerHTML = "00";
      hour.innerHTML = "00";
      clearInterval(timer);
    }
  }, 1000);
  stopButton.addEventListener('click', () => {
    countSeconds = 0;
    countMinutes = 0;
    countHours = 0;
    clearInterval(timer);
  });
  pauseButton.addEventListener('click', () => {
    clearInterval(timer);
  });
  resetButton.addEventListener('click', () => {
    second.innerHTML = "00";
    minute.innerHTML = "00";
    hour.innerHTML = "00";
    countSeconds = 0;
    countMinutes = 0;
    countHours = 0;
    clearInterval(timer);
  });
})