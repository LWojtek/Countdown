const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];




const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const deadline1 = document.querySelector('.deadline-expired');
const items = document.querySelectorAll('.deadline-format h4');
const img = document.querySelector('.img');

// display giveaway future day

let futureDate = new Date(2020, 9, 20, 20, 00, 00);

const year = futureDate.getFullYear();
let month = futureDate.getMonth(); // look below
const date = futureDate.getDate();
let day = futureDate.getDay(); // look below
let hour = futureDate.getHours();
let minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

day = weekdays[day]; // <----
month = months[month]; // <----

function formatHour() {
  if (hour < 10) {
    return hour = `0${hour}`
  }
  return hour;
}


// format time in giveaway text 

function formatMinutes() {
  if (minutes < 10) {
    return minutes = `0${minutes}`
  }
  return minutes;
}

formatMinutes();
formatHour();

// display giveaway text

const giveawayText = `Giveaway Ends On ${day}, ${date} ${month} ${year}, ${hour}:${minutes}`

giveaway.innerHTML = giveawayText;

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;

  const oneHour = 60 * 60 * 1000;

  const oneMinute = 60 * 1000;

  // calculate all values

  let days = Math.floor(t / oneDay);

  let hours = Math.floor((t % oneDay) / oneHour);

  let minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = Math.floor((t % oneMinute) / 1000);


  // set values array 

  const valuesArr = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(valuesArr[index]);
  });



  let item4 = parseInt(items[3].innerHTML.slice(1, 3))

  // when countdown completed display 0 and expired

  if (item4 < 0) {

    clearInterval(countdown)
    items[0].innerHTML = format(0);
    items[1].innerHTML = format(0);
    items[2].innerHTML = format(0);
    items[3].innerHTML = format(0);

    deadline1.innerHTML = `<h3> !!! EXPIRED !!! </h3>`


    deadline1.classList.add('deadline-animation');
    img.classList.add('img-faded');



  }

}


// countdown

let countdown = setInterval(getRemainingTime, 1000);


getRemainingTime();