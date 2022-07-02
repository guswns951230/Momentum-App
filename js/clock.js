const clock = document.querySelector('#clock');
const greeting = document.querySelector('#greeting');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

const today = new Date();
const hour = today.getHours();

if (hour >= 5 && hour < 7) {
  greeting.innerText = '"It\'s always darkest before the dawn."';
} else if (hour >= 7 && hour < 12) {
  greeting.innerText = 'Good morning, My Friend.';
} else if (hour >= 12 && hour < 17) {
  greeting.innerText = 'Good afternoon, My Friend.';
} else {
  greeting.innerText = 'Good evening, My Friend.';
}