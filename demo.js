function updateClock() {
  const now = new Date();

  const day = now.getDay();
  const date = now.getDate();
  const month = now.toLocaleString('default', { month: 'short' }).toUpperCase();
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  document.getElementById("date").textContent = date;
  document.getElementById("month").textContent = month;
  document.getElementById("year").textContent = year;

  document.getElementById("hours").textContent = String(hours);
  document.getElementById("minutes").textContent = String(minutes);
  document.getElementById("seconds").textContent = String(seconds);

  document.getElementById("am").checked = ampm === 'AM';
  document.getElementById("pm").checked = ampm === 'PM';

  
  for (let i = 0; i < 7; i++) {
    const el = document.getElementById(`day${i}`);
    el.classList.toggle("active", i === day);
  }
}

setInterval(updateClock, 1000);
updateClock(); 