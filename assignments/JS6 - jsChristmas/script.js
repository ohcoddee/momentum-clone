const clockTitle = document.querySelector("h2");

function getClock() {
  const dDay = new Date("2022-12-24:00:00:00+0900");
  const now = new Date();
  const gap = dDay - now;

  const minuteUnit = 60;
  const hourUnit = 60;
  const dayUnit = 24;
  const second = 1000;
  const minute = minuteUnit * second;
  const hour = hourUnit * minute;
  const day = dayUnit * hour;

  const seconds = String(Math.floor((gap / second) % minuteUnit)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((gap / minute) % hourUnit)).padStart(
    2,
    "0"
  );
  const hours = String(Math.floor((gap / hour) % dayUnit)).padStart(2, "0");
  const days = String(Math.floor(gap / day)).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
